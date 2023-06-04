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
import { useBookContext } from "../../context/bookContext";
import { IBooks } from "../../ui/interfaces";

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;

const BANNERS = [
  {
    id: "0",
    image:
      "https://polosaomateus.com.br/wp-content/uploads/2017/06/banner-livros.png",
  },
  {
    id: "1",
    image:
      "https://1.bp.blogspot.com/-JAhMatr-uKE/Wcm3tNE0-lI/AAAAAAABZJ4/hCqaB8xAGZ4BQp767miH3VdYk8FkX4yFQCLcBGAs/w1200-h630-p-k-no-nu/eu-amo-ler.png",
  },
];

function Home({ navigation }) {
  const { mostWanted, tecnology, selfHelp, bookList, setBook } = useBookContext();

  const handleCard = (book: IBooks) => {
    setBook(book);
    navigation.navigate("Livro")
  }

  const Item = ({card}) => (
    <Card onPress={() => handleCard(card) }>
      <Image
        style={{ width: 87, height: 100, margin: "auto" }}
        source={card.image ? { uri: card.image } : require("../../assets/banner.png")}
        resizeMode="contain"
      />
      <Main>
        <BookText numberOfLines={1}>{card.title}</BookText>
          <BookText style={{ fontSize: 10 }}>{card.author}</BookText>
          <BookText style={{ fontSize: theme.fonts.obs }}>
            R$
            <BookText style={{ fontSize: theme.fonts.text }}>{card.price}</BookText>
          </BookText>
      </Main>
    </Card>
  );

  const ItemImages = ({ image }) => (
    <Image
      resizeMode="stretch"
      style={{
        width: 296,
        height: 148,
        marginHorizontal: 20,
        borderRadius: 16,
      }}
      source={{ uri: image }}
    />
  );

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return bookList && bookList.length ? (
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

        <BookText
          style={{
            marginBottom: 16,
            color: theme.colors.text_dark,
            fontWeight: "700",
          }}
        >
          Livros mais pedidos
        </BookText>
        <FlatList
          data={mostWanted}
          renderItem={({ item }) => (
            <Item
              card={item}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />

        <Spacer margin={"mx"} />

        <BookText
          style={{
            marginBottom: 16,
            color: theme.colors.text_dark,
            fontWeight: "700",
          }}
        >
          Sobre Tecnologia
        </BookText>
        <FlatList
          data={tecnology}
          renderItem={({ item }) => (
            <Item
              card={item}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />

        <Spacer margin={"mx"} />

        <BookText
          style={{
            marginBottom: 16,
            color: theme.colors.text_dark,
            fontWeight: "700",
          }}
        >
          Sobre Auto Ajuda
        </BookText>
        <FlatList
          data={selfHelp}
          renderItem={({ item }) => (
            <Item
              card={item}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
        <Spacer margin={"mx"} />
      </ViewContainer>
      <ButtonNavBar navigation={navigation} />
    </SafeAreaView>
  ) : null;
}

export default Home;
