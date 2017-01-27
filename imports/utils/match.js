const NonEmptyString = Match.Where(x => {
  check(x, String);
  return x.length > 0;
});

export { NonEmptyString };
