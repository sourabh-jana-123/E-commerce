module.exports = {
    name: {
        type: String,
        required: true,
        example: "Laptop"
    },
    description: {
        type: String,
        required: true,
        example: "i3 procesor with 8gb ram"
    },
    price: {
        type: Number,
        required: true,
        example: 80000
    },
    ratings: {
        type: Number,
        example: 6
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            uri: {
                type: String,
                required: true,
            },
        },
    ],
    category: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        example: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            user: {
                type: "#/components/Schemas/User",
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],
    user: {
        type: "#/components/Schemas/User",
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};