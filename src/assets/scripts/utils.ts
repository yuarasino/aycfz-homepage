import moment from "moment"

export const formatDate = (date: Date) => {
  return moment(date).format("YYYY.MM.DD")
}
