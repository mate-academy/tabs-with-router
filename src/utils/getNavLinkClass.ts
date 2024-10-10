import classNames from "classnames";

export const getNavLinkClass = ({isActive}: {isActive: boolean}) =>
  classNames('navbar-item', {
  'is-active': isActive,
});
