export class MainsExamController {
    static async createMainsExam(req: any, res: any) {
        return res.json({ message: "Hit createMainsExam" });
    }

    static async getTeacherMainsExams(req: any, res: any) {
        return res.json({ message: "Hit getTeacherMainsExams" });
    }

    static async getMainsExamById(req: any, res: any) {
        return res.json({ message: "Hit getMainsExamById" });
    }

    static async deleteMainsExam(req: any, res: any) {
        return res.json({ message: "Hit deleteMainsExam" });
    }
}