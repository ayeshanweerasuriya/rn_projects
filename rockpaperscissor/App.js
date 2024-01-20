import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function App() {
  const options = ["Rock", "Paper", "Scissor"];

  const [won, setWon] = useState(0);
  const [lose, setLose] = useState(0);
  const [display, setDisplay] = useState("Good Luck!");

  const [userSelect, setUserSelect] = useState();
  const [computerSelect, setComputerSelect] = useState();

  computerGeneratedChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
  };

  handleClick = (id) => {
    const userResult = options[id];
    const computerChoice = computerGeneratedChoice();

    setUserSelect(`Your Select: ${userResult}`);
    setComputerSelect(`Computer Select: ${computerChoice}`);

    if (userResult === computerChoice) {
      setDisplay("It is a Tie!");
    } else if (
      (userResult === "Rock" && computerChoice === "Scissor") ||
      (userResult === "Paper" && computerChoice === "Rock") ||
      (userResult === "Scissor" && computerChoice === "Paper")
    ) {
      setWon(won + 1);
      setDisplay(`Congratulations! \n You Win!`);
    } else {
      setLose(lose + 1);
      setDisplay("Sorry! You Lose!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.score}>
        <View style={styles.won}>
          <Text style={styles.text}>{won}</Text>
        </View>
        <View style={styles.lose}>
          <Text style={styles.text}>{lose}</Text>
        </View>
      </View>
      <View style={styles.display}>
        <Text style={styles.result}>{userSelect}</Text>
        <Text style={styles.result}>{computerSelect}</Text>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            handleClick(0);
          }}
          style={styles.button}
        >
          <Image
            source={require("./assets/rock.png")}
            style={styles.image}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleClick(1);
          }}
          style={styles.button}
        >
          <Image
            source={require("./assets/paper.png")}
            style={styles.image}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleClick(2);
          }}
          style={styles.button}
        >
          <Image
            source={require("./assets/scissor.png")}
            style={styles.image}
          ></Image>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    padding: 20,
  },

  score: {
    flexDirection: "row",
    backgroundColor: "yellow",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  won: {
    flex: 1,
    backgroundColor: "#517fc9",
    height: "100%", // Full height of the parent
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  lose: {
    flex: 1,
    backgroundColor: "#c95951",
    height: "100%", // Full height of the parent
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  text: {
    color: "white", // Text color for better visibility
    fontWeight: "bold", // Bold text for better visibility
  },

  display: {
    width: "100%",
    height: 150,
    backgroundColor: "#a3c6ff",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  displayText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  result: {
    fontWeight: "bold",
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 90,
    height: 50,
    backgroundColor: "#c9b73c",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    margin: 5,
  },

  image: {
    height: "50px",
    width: "50px",
  },
});
