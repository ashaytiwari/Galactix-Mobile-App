export interface IPaginationMetadataModel {
  totalRecords: number,
  totalPages: number,
  currentPage: number,
  nextPage: number | null,
  prevPage: number | null
}