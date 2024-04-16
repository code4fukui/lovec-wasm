extern void putchar(int n);

int love(int param) {
  putchar(65);
  putchar(66);
  putchar(67);
  return 0;
}

int love2(int param) {
  for (int i = 'A'; i <= 'Z'; i++) {
    putchar(i);
  }
  return param * 2;
}
