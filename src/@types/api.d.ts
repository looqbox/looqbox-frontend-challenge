type ApiErrorShape = {
    message: string;
    status?: number;
    code?: string;
    details?: unknown
}