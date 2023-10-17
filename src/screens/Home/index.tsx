import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = [
    "Eduardo",
    "Joabe",
    "Felipe",
    "Vitor",
    "Otto",
    "Rebecca",
    "Camila",
    "Nathaly",
    "Juan",
    "Jaelson",
    "Léia",
    "Leonhart",
    "Yasmin",
  ];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>App da mina</Text>

      <Text style={styles.eventDate}>Mineração Vale Verde</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("Rodrigo")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença!
          </Text>
        )}
      />

      {participants.map((participant) => (
        <Participant
          key={participant}
          name={participant}
          onRemove={() => handleParticipantRemove("Eduardo")}
        />
      ))}
    </View>
  );
}
