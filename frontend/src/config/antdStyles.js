import { colors } from "./colors.js";

export const antdStyles = {
  token: {
    fontFamily: "MontserratRegular, sans-serif",
    fontSize: 16,

    colorPrimary: colors.primaryDark,
    colorPrimaryBgHover: `rgba(${colors.primaryDark}, 0.5)`,

    colorTextBase: colors.primaryLight,
    colorTextPlaceholder: colors.secondaryLight,

    colorLink: colors.primaryDark,
    colorLinkHover: colors.infoDark,
    // colorLinkActive: colors.actionDark,

    // colorBgContainer: `rgba(${colors.actionLight}, 1)`,
    colorBgContainer: "transparent",
    colorBgLayout: "transparent",
  },
};
