import { View, Text, StyleSheet } from "react-native";
import { FontFamily } from "../../theme";
import Icon from "react-native-vector-icons/FontAwesome";
import IconEn from "react-native-vector-icons/Entypo";

export default function HospitaInfoItem({ name, address, phone, hours }) {
  return (
    <View>
      <View className="rounded-lg bg-white py-3 px-4 mb-2" style={styles.card}>
        <Text className="text-lg" style={[styles.text, styles.gray]}>
          {name}
        </Text>

        <View className="pt-2 pb-1">
          <View className="flex-row pb-2">
            <IconEn
              name="location-pin"
              size={20}
              color="#c2c2c2"
              style={{ marginLeft: -5 }}
            />
            <Text style={[styles.text, styles.gray]} className="mr-5">
              {address}
            </Text>
          </View>
          <View className="flex-row">
            <Icon
              name="phone"
              size={20}
              color="#c2c2c2"
              style={{ marginRight: 2 }}
            />
            <Text style={[styles.text, styles.gray]}>{phone}</Text>
          </View>
        </View>

        <View className="rounded px-2 py-1 mt-2" style={styles.labelbg}>
          <Text style={[styles.labeltext, styles.text]}>{hours}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    elevation: 3,
  },
  labelbg: {
    backgroundColor: "#FFECF0",
  },
  labeltext: {
    color: "#ff8aa6",
  },
  primarycolor: {
    color: "#FE0944",
  },
  gray: {
    color: "#696969",
  },
});
