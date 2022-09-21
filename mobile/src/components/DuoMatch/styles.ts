import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    width: 360,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,
  },
  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 8,
  },
  discordButton: {
    width: 260,
    height: 60,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 32,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});