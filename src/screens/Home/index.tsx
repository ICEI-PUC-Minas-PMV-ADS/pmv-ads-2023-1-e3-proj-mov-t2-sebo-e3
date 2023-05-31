import {
  ScrollView,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import { BookText, Card, LogoImage, Main } from "./style";
import React from "react";
import Spacer from "../../components/Spacer";
import { ViewContainer } from "../../ui/style/style";
import Label from "../../components/Forms/Label";
import theme from "../../ui/style/theme";
import ButtonNavBar from "../../components/Forms/ButtonNavBar";
import { ExpandingDot } from "react-native-animated-pagination-dots";

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;

const DATA = [
  {
    id: "0",
    title: "É assim que aca.",
    autor: "Collen Hoover",
    price: "12,50",
  },
  {
    id: "1",
    title: "É assim que aca.",
    autor: "Collen Hoover",
    price: "14,50",
  },
  {
    id: "2",
    title: "É assim que aca.",
    autor: "Collen Hoover",
    price: "16,50",
  },
  {
    id: "3",
    title: "É assim que aca.",
    autor: "Collen Hoover",
    price: "18,50",
  },
];

const BANNERS = [
  {
    id: "0",
    image: require("../../assets/banner.png"),
  },
  {
    id: "1",
    image: require("../../assets/banner.png"),
  },
];

function Home({ navigation }) {
  const Item = ({ title, autor, price }) => (
    <Card>
      <Image
        style={{ width: 87, height: 100, margin: "auto" }}
        source={require("../../assets/Capa.png")}
      />
      <Main>
        <BookText>{title}</BookText>
        <BookText style={{ fontSize: 10 }}>{autor}</BookText>
        <BookText style={{ fontSize: theme.fonts.obs }}>
          R$
          <BookText style={{ fontSize: theme.fonts.text }}>{price}</BookText>
        </BookText>
      </Main>
    </Card>
  );

  const ItemImages = ({ image }) => (
    <Image resizeMode="stretch" style={{ marginHorizontal: 20}} source={image} />
  );
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ViewContainer>
        <View style={{ alignItems: "center" }}>
          <LogoImage source={require("../../assets/sebo-logo-home.png")} />

          <FlatList
            data={BANNERS}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            pagingEnabled
            horizontal
            decelerationRate={"normal"}
            scrollEventThrottle={16}
            renderItem={({ item }) => <ItemImages image={item.image} />}
          />
          <ExpandingDot
            data={BANNERS}
            expandingDotWidth={30}
            scrollX={scrollX}
            inActiveDotOpacity={0.6}
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: "#347af0",
              borderRadius: 5,
              marginHorizontal: 5,
            }}
            containerStyle={{
              position: "relative",
              bottom: -10,
            }}
          />
        </View>

        <Spacer margin={"mx"} />

        <BookText style={{ marginBottom: 16, color: theme.colors.text_dark }}>
          Livros mais pedidos
        </BookText>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} autor={item.autor} price={item.price} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />

        <Spacer margin={"mx"} />

        <BookText style={{ marginBottom: 16, color: theme.colors.text_dark }}>
          Sobre Tecnologia
        </BookText>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} autor={item.autor} price={item.price} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
        <Spacer margin={"mx"} />
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default Home;
