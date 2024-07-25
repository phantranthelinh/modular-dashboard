// Function to get the initials of a person's name
export const getPersonInitials = (name) => {
    // Split the name into parts (assuming first name)
    const [firstName] = name.split(" ").reverse();

    // Return the initials
    return firstName[0];
};

export const determineTaskStatus = (status) => {
    if (status.isCompleted) {
        return "completed";
    } else if (status.isPending) {
        return "pending";
    } else if (status.isProcessing) {
        return "processing";
    } else {
        return "";
    }
};