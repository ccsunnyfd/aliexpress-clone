
interface Order {
    id: number;
    userId: string;
    stripeId: string;
    name: string;
    address: string;
    zipcode: string;
    city: string;
    country: string;
    paid: boolean;
    created_at: Date | null;
}