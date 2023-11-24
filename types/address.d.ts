interface Order {
    id: number;
    userId: string;
    stripeId: string;
    name: string;
    address: string;
    zipcode: string;
    city: string;
    country: string;
    created_at: Date | null;
}