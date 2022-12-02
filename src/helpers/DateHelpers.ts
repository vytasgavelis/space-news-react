export function formatDate(input: string): string {
    return new Date(Date.parse(input)).toLocaleString('en-US')
}