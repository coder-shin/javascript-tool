const insert_crlf_every = (len) => {
  const check_invalid_parameter = () => {
    const MIN_LENGTH = 1;
    if (len < MIN_LENGTH) {
      throw new Error('Parameter must be greater than 0');
    }
  }
  check_invalid_parameter();

  return (words) => {
    if (!words) {
      return '';
    }

    const CRLF = '\r\n';
    return words.match(new RegExp('.{1,' + len + '}', 'g')).join(CRLF);
  }
}

export default { insert_crlf_every };
