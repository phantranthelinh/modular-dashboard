export const inititalTasks = new Array(30).fill(0).map((item, index) => ({
    id: index + 1,
    title: `Task ${index + 1}`,
    assigned_person: [{
        name: "Phan Tran The Linh",
        id: 1
    },
    {
        name: "Phan Alex",
        id: 2

    }],
    due_date: "2024-7-24",
    status: {
        isCompleted: false,
        isPending: false,
        isProcessing: true
    }

}));