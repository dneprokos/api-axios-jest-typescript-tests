export interface PaginatedResponse<T> {
    data: T[];
    page_number: number;
    page_limit: number;
    total_results: number;
}