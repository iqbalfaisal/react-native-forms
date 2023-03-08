export const getChanges = (previous, current) => {
  if (isPrimitive(previous) && isPrimitive(current)) {
    if (previous === current) {
      return '';
    }

    return current;
  }

  if (isObject(previous) && isObject(current)) {
    const diff = getChanges(Object.entries(previous), Object.entries(current));

    return diff.reduce((merged, [key, value]) => {
      return {
        ...merged,
        [key]: value,
      };
    }, {});
  }

  const changes = [];

  if (JSON.stringify(previous) === JSON.stringify(current)) {
    return changes;
  }

  for (let i = 0; i < current.length; i++) {
    const item = current[i];

    if (JSON.stringify(item) !== JSON.stringify(previous[i])) {
      changes.push(item);
    }
  }

  return changes;
};
