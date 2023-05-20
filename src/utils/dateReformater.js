function dateReformater(publishDate) {
  const date = new Date(publishDate)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const reformatDate = date.toLocaleString('default', options);
  return reformatDate;
}

export default dateReformater;