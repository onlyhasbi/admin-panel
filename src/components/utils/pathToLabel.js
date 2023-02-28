import _ from "lodash";

export function pathToLabel(path) {
  return _.chain(path).split("/").last().capitalize().value();
}
