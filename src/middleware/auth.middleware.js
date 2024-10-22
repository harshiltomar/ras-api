import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authenticateTeacher = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization token required' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const teacher = await prisma.teacher.findUnique({
      where: { id: decoded.id }
    });

    if (!teacher) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    req.teacher = {
      id: teacher.id,
      email: teacher.email,
      name: teacher.name
    };

    next();
  } catch (error) {
    res.status(401).json({ error: 'Not authorized' });
  }
};