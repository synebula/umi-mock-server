interface NumberConstructor {
  parseFloat: (string: string) => number;
}
declare var Number: NumberConstructor;
