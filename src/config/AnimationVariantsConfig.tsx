export const getListItemVariants = (itemsLength: number) => {
    const itemVariants = {
        hidden: (i: number) => ({
            opacity: 0,
            y: -10,
            transition: {
                delay: (itemsLength - 1 - i) * 0.1, // reversed delay
            }
        }),
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
            }
        }),
    };

    return itemVariants;
};