import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },

  name: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
    marginLeft: 16,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
    alignItems: "center", // alinha da vertical
  },

  button: {
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center", // alinha da vertical
    justifyContent: "center", // alinha da horizontal
  },
});
