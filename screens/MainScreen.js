import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  ActivityIndicator,
  Modal,
  TextInput,
  SafeAreaView,
  Alert,
  Dimensions,
  BackHandler,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const currenciesList = [
  {
    id: "AED",
    title: "United Arab Emirates Dirham",
  },
  {
    id: "AFN",
    title: "Afghan Afghani",
  },
  {
    id: "ALL",
    title: "Albanian Lek",
  },
  {
    id: "AMD",
    title: "Armenian Dram",
  },
  {
    id: "ANG",
    title: "Netherlands Antillean Guilder",
  },
  {
    id: "AOA",
    title: "Angolan Kwanza",
  },
  {
    id: "ARS",
    title: "Argentine Peso",
  },
  {
    id: "AUD",
    title: "Australian Dollar",
  },
  {
    id: "AWG",
    title: "Aruban Florin",
  },
  {
    id: "AZN",
    title: "Azerbaijani Manat",
  },
  {
    id: "BAM",
    title: "Bosnia-Herzegovina Convertible Mark",
  },
  {
    id: "BBD",
    title: "Barbadian Dollar",
  },
  {
    id: "BDT",
    title: "Bangladeshi Taka",
  },
  {
    id: "BGN",
    title: "Bulgarian Lev",
  },
  {
    id: "BHD",
    title: "Bahraini Dinar",
  },
  {
    id: "BIF",
    title: "Burundian Franc",
  },
  {
    id: "BMD",
    title: "Bermudan Dollar",
  },
  {
    id: "BND",
    title: "Brunei Dollar",
  },
  {
    id: "BOB",
    title: "Bolivian Boliviano",
  },
  {
    id: "BRL",
    title: "Brazilian Real",
  },
  {
    id: "BSD",
    title: "Bahamian Dollar",
  },
  {
    id: "BTC",
    title: "Bitcoin",
  },
  {
    id: "BTN",
    title: "Bhutanese Ngultrum",
  },
  {
    id: "BWP",
    title: "Botswanan Pula",
  },
  {
    id: "BYN",
    title: "New Belarusian Ruble",
  },
  {
    id: "BYR",
    title: "Belarusian Ruble",
  },
  {
    id: "BZD",
    title: "Belize Dollar",
  },
  {
    id: "CAD",
    title: "Canadian Dollar",
  },
  {
    id: "CDF",
    title: "Congolese Franc",
  },
  {
    id: "CHF",
    title: "Swiss Franc",
  },
  {
    id: "CLF",
    title: "Chilean Unit of Account (UF)",
  },
  {
    id: "CLP",
    title: "Chilean Peso",
  },
  {
    id: "CNY",
    title: "Chinese Yuan",
  },
  {
    id: "COP",
    title: "Colombian Peso",
  },
  {
    id: "CRC",
    title: "Costa Rican Colón",
  },
  {
    id: "CUC",
    title: "Cuban Convertible Peso",
  },
  {
    id: "CUP",
    title: "Cuban Peso",
  },
  {
    id: "CVE",
    title: "Cape Verdean Escudo",
  },
  {
    id: "CZK",
    title: "Czech Republic Koruna",
  },
  {
    id: "DJF",
    title: "Djiboutian Franc",
  },
  {
    id: "DKK",
    title: "Danish Krone",
  },
  {
    id: "DOP",
    title: "Dominican Peso",
  },
  {
    id: "DZD",
    title: "Algerian Dinar",
  },
  {
    id: "EGP",
    title: "Egyptian Pound",
  },
  {
    id: "ERN",
    title: "Eritrean Nakfa",
  },
  {
    id: "ETB",
    title: "Ethiopian Birr",
  },
  {
    id: "EUR",
    title: "Euro",
  },
  {
    id: "FJD",
    title: "Fijian Dollar",
  },
  {
    id: "FKP",
    title: "Falkland Islands Pound",
  },
  {
    id: "GBP",
    title: "British Pound Sterling",
  },
  {
    id: "GEL",
    title: "Georgian Lari",
  },
  {
    id: "GGP",
    title: "Guernsey Pound",
  },
  {
    id: "GHS",
    title: "Ghanaian Cedi",
  },
  {
    id: "GIP",
    title: "Gibraltar Pound",
  },
  {
    id: "GMD",
    title: "Gambian Dalasi",
  },
  {
    id: "GNF",
    title: "Guinean Franc",
  },
  {
    id: "GTQ",
    title: "Guatemalan Quetzal",
  },
  {
    id: "GYD",
    title: "Guyanaese Dollar",
  },
  {
    id: "HKD",
    title: "Hong Kong Dollar",
  },
  {
    id: "HNL",
    title: "Honduran Lempira",
  },
  {
    id: "HRK",
    title: "Croatian Kuna",
  },
  {
    id: "HTG",
    title: "Haitian Gourde",
  },
  {
    id: "HUF",
    title: "Hungarian Forint",
  },
  {
    id: "IDR",
    title: "Indonesian Rupiah",
  },
  {
    id: "ILS",
    title: "Israeli New Sheqel",
  },
  {
    id: "IMP",
    title: "Manx pound",
  },
  {
    id: "INR",
    title: "Indian Rupee",
  },
  {
    id: "IQD",
    title: "Iraqi Dinar",
  },
  {
    id: "IRR",
    title: "Iranian Rial",
  },
  {
    id: "ISK",
    title: "Icelandic Króna",
  },
  {
    id: "JEP",
    title: "Jersey Pound",
  },
  {
    id: "JMD",
    title: "Jamaican Dollar",
  },
  {
    id: "JOD",
    title: "Jordanian Dinar",
  },
  {
    id: "JPY",
    title: "Japanese Yen",
  },
  {
    id: "KES",
    title: "Kenyan Shilling",
  },
  {
    id: "KGS",
    title: "Kyrgystani Som",
  },
  {
    id: "KHR",
    title: "Cambodian Riel",
  },
  {
    id: "KMF",
    title: "Comorian Franc",
  },
  {
    id: "KPW",
    title: "North Korean Won",
  },
  {
    id: "KRW",
    title: "South Korean Won",
  },
  {
    id: "KWD",
    title: "Kuwaiti Dinar",
  },
  {
    id: "KYD",
    title: "Cayman Islands Dollar",
  },
  {
    id: "KZT",
    title: "Kazakhstani Tenge",
  },
  {
    id: "LAK",
    title: "Laotian Kip",
  },
  {
    id: "LBP",
    title: "Lebanese Pound",
  },
  {
    id: "LKR",
    title: "Sri Lankan Rupee",
  },
  {
    id: "LRD",
    title: "Liberian Dollar",
  },
  {
    id: "LSL",
    title: "Lesotho Loti",
  },
  {
    id: "LTL",
    title: "Lithuanian Litas",
  },
  {
    id: "LVL",
    title: "Latvian Lats",
  },
  {
    id: "LYD",
    title: "Libyan Dinar",
  },
  {
    id: "MAD",
    title: "Moroccan Dirham",
  },
  {
    id: "MDL",
    title: "Moldovan Leu",
  },
  {
    id: "MGA",
    title: "Malagasy Ariary",
  },
  {
    id: "MKD",
    title: "Macedonian Denar",
  },
  {
    id: "MMK",
    title: "Myanma Kyat",
  },
  {
    id: "MNT",
    title: "Mongolian Tugrik",
  },
  {
    id: "MOP",
    title: "Macanese Pataca",
  },
  {
    id: "MRO",
    title: "Mauritanian Ouguiya",
  },
  {
    id: "MUR",
    title: "Mauritian Rupee",
  },
  {
    id: "MVR",
    title: "Maldivian Rufiyaa",
  },
  {
    id: "MWK",
    title: "Malawian Kwacha",
  },
  {
    id: "MXN",
    title: "Mexican Peso",
  },
  {
    id: "MYR",
    title: "Malaysian Ringgit",
  },
  {
    id: "MZN",
    title: "Mozambican Metical",
  },
  {
    id: "NAD",
    title: "Namibian Dollar",
  },
  {
    id: "NGN",
    title: "Nigerian Naira",
  },
  {
    id: "NIO",
    title: "Nicaraguan Córdoba",
  },
  {
    id: "NOK",
    title: "Norwegian Krone",
  },
  {
    id: "NPR",
    title: "Nepalese Rupee",
  },
  {
    id: "NZD",
    title: "New Zealand Dollar",
  },
  {
    id: "OMR",
    title: "Omani Rial",
  },
  {
    id: "PAB",
    title: "Panamanian Balboa",
  },
  {
    id: "PEN",
    title: "Peruvian Nuevo Sol",
  },
  {
    id: "PGK",
    title: "Papua New Guinean Kina",
  },
  {
    id: "PHP",
    title: "Philippine Peso",
  },
  {
    id: "PKR",
    title: "Pakistani Rupee",
  },
  {
    id: "PLN",
    title: "Polish Zloty",
  },
  {
    id: "PYG",
    title: "Paraguayan Guarani",
  },
  {
    id: "QAR",
    title: "Qatari Rial",
  },
  {
    id: "RON",
    title: "Romanian Leu",
  },
  {
    id: "RSD",
    title: "Serbian Dinar",
  },
  {
    id: "RUB",
    title: "Russian Ruble",
  },
  {
    id: "RWF",
    title: "Rwandan Franc",
  },
  {
    id: "SAR",
    title: "Saudi Riyal",
  },
  {
    id: "SBD",
    title: "Solomon Islands Dollar",
  },
  {
    id: "SCR",
    title: "Seychellois Rupee",
  },
  {
    id: "SDG",
    title: "Sudanese Pound",
  },
  {
    id: "SEK",
    title: "Swedish Krona",
  },
  {
    id: "SGD",
    title: "Singapore Dollar",
  },
  {
    id: "SHP",
    title: "Saint Helena Pound",
  },
  {
    id: "SLL",
    title: "Sierra Leonean Leone",
  },
  {
    id: "SOS",
    title: "Somali Shilling",
  },
  {
    id: "SRD",
    title: "Surinamese Dollar",
  },
  {
    id: "STD",
    title: "São Tomé and Príncipe Dobra",
  },
  {
    id: "SVC",
    title: "Salvadoran Colón",
  },
  {
    id: "SYP",
    title: "Syrian Pound",
  },
  {
    id: "SZL",
    title: "Swazi Lilangeni",
  },
  {
    id: "THB",
    title: "Thai Baht",
  },
  {
    id: "TJS",
    title: "Tajikistani Somoni",
  },
  {
    id: "TMT",
    title: "Turkmenistani Manat",
  },
  {
    id: "TND",
    title: "Tunisian Dinar",
  },
  {
    id: "TOP",
    title: "Tongan Paʻanga",
  },
  {
    id: "TRY",
    title: "Turkish Lira",
  },
  {
    id: "TTD",
    title: "Trinidad and Tobago Dollar",
  },
  {
    id: "TWD",
    title: "New Taiwan Dollar",
  },
  {
    id: "TZS",
    title: "Tanzanian Shilling",
  },
  {
    id: "UAH",
    title: "Ukrainian Hryvnia",
  },
  {
    id: "UGX",
    title: "Ugandan Shilling",
  },
  {
    id: "USD",
    title: "United States Dollar",
  },
  {
    id: "UYU",
    title: "Uruguayan Peso",
  },
  {
    id: "UZS",
    title: "Uzbekistan Som",
  },
  {
    id: "VEF",
    title: "Venezuelan Bolívar Fuerte",
  },
  {
    id: "VND",
    title: "Vietnamese Dong",
  },
  {
    id: "VUV",
    title: "Vanuatu Vatu",
  },
  {
    id: "WST",
    title: "Samoan Tala",
  },
  {
    id: "XAF",
    title: "CFA Franc BEAC",
  },
  {
    id: "XAG",
    title: "Silver (troy ounce)",
  },
  {
    id: "XAU",
    title: "Gold (troy ounce)",
  },
  {
    id: "XCD",
    title: "East Caribbean Dollar",
  },
  {
    id: "XDR",
    title: "Special Drawing Rights",
  },
  {
    id: "XOF",
    title: "CFA Franc BCEAO",
  },
  {
    id: "XPF",
    title: "CFP Franc",
  },
  {
    id: "YER",
    title: "Yemeni Rial",
  },
  {
    id: "ZAR",
    title: "South African Rand",
  },
  {
    id: "ZMK",
    title: "Zambian Kwacha (pre-2013)",
  },
  {
    id: "ZMW",
    title: "Zambian Kwacha",
  },
  {
    id: "ZWL",
    title: "Zimbabwean Dollar",
  },
];
var selectedFrom = "INR";
var selectedTo = "USD";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: currenciesList,
      defaultCurrencyFrom: selectedFrom,
      defaultCurrencyTo: selectedTo,
      input: "0.0",
      resultText: 0,
      isLoading: true,
      isVisibleFrom: false,
      isVisibleTo: false,
      search: "",
      finalResult: "",
      lastUpdate: "",
      currencyRates: [],
      screenHeight: "",
      screenWidth: "",
    };
    this.arrayholder = this.state.data;
  }

  async liveCurrencyRates() {
    if (this.state.latUpdate === "") {
      var date = new Date();
      this.setState({
        lastUpdate: date,
      });
    }
    var currentDate = new Date();

    if (currentDate !== this.state.lastUpdate) {
      const endPoint = "live";
      const access_key = "c6bbb4c0633bcd835cece65a036e6c3f";

      try {
        const response = await fetch(
          "http://api.currencylayer.com/" +
            endPoint +
            "?access_key=" +
            access_key
        );
        const responseJson = await response.json();
        this.setState({
          currencyRates: this.state.currencyRates.concat(responseJson.quotes),
        });

        this.currentRatesToday = this.state.currencyRates;
      } catch (error) {
        return console.log(error);
      }
    }
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    this.liveCurrencyRates();
    this.setState({
      screenWidth: Dimensions.get("screen").width,
      screenHeight: Dimensions.get("screen").height,
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    return true; // Do nothing when back button is pressed
  };

  currencyConverter = () => {
    const sourceFrom = "USD" + this.state.defaultCurrencyFrom;
    const sourceTo = "USD" + this.state.defaultCurrencyTo;

    const rateFrom = this.currentRatesToday.map((item) => item[sourceFrom]);
    const rateTo = this.currentRatesToday.map((item) => item[sourceTo]);

    var singleUnit = ((rateTo / rateFrom) * this.state.input).toFixed(2);

    this.setState({
      resultText: singleUnit,
    });
  };

  onPressOne = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "1" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("1") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressTwo = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "2" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("2") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressThree = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "3" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("3") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressFour = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "4" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("4") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressFive = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "5" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("5") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressSix = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "6" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("6") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressSeven = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "7" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("7") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressEight = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "8" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("8") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressNine = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "9" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("9") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressZero = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "0" });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat("0") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressDot = () => {
    if (this.state.input == 0.0) {
      this.setState({ input: "." });
    } else {
      if (this.state.input.length < 7) {
        this.setState({ input: this.state.input.concat(".") });
      } else {
        Alert.alert("Sorry, You have reached the maximum input limit.");
      }
    }
  };

  onPressC = () => {
    if (!(this.state.input == 0.0)) {
      this.setState({ input: this.state.input.slice(0, -1) });
    }
    if (this.state.input.length == 1) {
      this.setState({ input: "0.0" });
    }
  };

  deleteAll = () => {
    this.setState({
      input: "0.0",
      resultText: 0,
    });
  };

  onPressFrom = () => {
    this.setState({
      isVisibleFrom: true,
    });
  };

  onPressTo = () => {
    this.setState({
      isVisibleTo: true,
    });
  };

  onPressArrowHandler = () => {
    let currencyFrom = selectedFrom;
    selectedFrom = selectedTo;
    selectedTo = currencyFrom;
    this.setState({
      defaultCurrencyFrom: selectedFrom,
      defaultCurrencyTo: selectedTo,
    });
  };

  searchFilterFunction = (text) => {
    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.id.toUpperCase()}   
                      ${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({ data: newData });
  };

  getQuotes = (item) => {
    return item.quotes;
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={["#2BC0E4", "#EAECC6"]} style={styles.gradient}>
          <View style={styles.topView}>
            <View style={styles.topLeftView}>
              <View style={styles.topLeftViewContainerUp}>
                <View style={styles.headerText}>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 18,
                    }}
                  >
                    From
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.touchableAreaTopLeftTop}
                  onPress={this.onPressFrom}
                >
                  <Text style={styles.currencyFrom}>{selectedFrom}</Text>

                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isVisibleFrom}
                    style={styles.modal}
                  >
                    <LinearGradient
                      colors={["#2BC0E4", "#EAECC6"]}
                      style={{ flex: 1, width: "100%" }}
                    >
                      <View style={{}}>
                        <SafeAreaView>
                          <LinearGradient
                            colors={["#2BC0E4", "#EAECC6"]}
                            style={styles.linerarGradientStyle}
                          >
                            <View style={styles.searchBarContainer}>
                              <TouchableWithoutFeedback
                                onPress={Keyboard.dismiss}
                              >
                                <TextInput
                                  placeholder="Search"
                                  placeholderTextColor="rgba(255,255,255,0.8)"
                                  style={styles.searchBar}
                                  keyboardAppearance="dark"
                                  onChangeText={(text) =>
                                    this.searchFilterFunction(text)
                                  }
                                />
                              </TouchableWithoutFeedback>
                            </View>

                            <View style={styles.flatListView}>
                              <FlatList
                                style={styles.flatList}
                                data={this.state.data}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                  <View>
                                    <TouchableOpacity
                                      onPress={() => {
                                        selectedFrom = item.id;
                                        this.setState({
                                          defaultCurrencyFrom: selectedFrom,
                                          isVisibleFrom: false,
                                          data: currenciesList,
                                        });
                                      }}
                                    >
                                      <View style={styles.modalContainer}>
                                        <Text
                                          style={styles.modalTextCurrencyCode}
                                        >
                                          {item.id}
                                        </Text>
                                        <Text
                                          style={styles.modalTextCurrencyName}
                                        >
                                          {item.title}
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                )}
                              ></FlatList>

                              <View style={styles.backButtonView}>
                                <TouchableOpacity
                                  style={styles.backButtonTouchable}
                                  onPress={() => {
                                    this.setState({
                                      isVisibleFrom: false,
                                    });
                                  }}
                                >
                                  <Text style={styles.backButtonText}>
                                    Back
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </LinearGradient>
                        </SafeAreaView>
                      </View>
                    </LinearGradient>
                  </Modal>
                </TouchableOpacity>
              </View>

              <View style={styles.arrowView}>
                <TouchableOpacity
                  style={styles.arrowTouchable}
                  onPress={this.onPressArrowHandler}
                >
                  <View>
                    <Text style={styles.arrow}>&#x21C5;</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.topLeftViewContainerDown}>
                <View style={styles.headerText}>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 18,
                    }}
                  >
                    To
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.touchableAreaTopLeftBottom}
                  onPress={this.onPressTo}
                >
                  <Text style={styles.currencyTo}>{selectedTo}</Text>

                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isVisibleTo}
                  >
                    <LinearGradient colors={["#2BC0E4", "#EAECC6"]}>
                      <View style={styles.mainModal}>
                        <SafeAreaView>
                          <LinearGradient colors={["#2BC0E4", "#EAECC6"]}>
                            <View style={styles.searchBarContainer}>
                              <TouchableWithoutFeedback
                                onPress={Keyboard.dismiss}
                              >
                                <TextInput
                                  placeholder="Search"
                                  placeholderTextColor="rgba(255,255,255,0.8)"
                                  style={styles.searchBar}
                                  onChangeText={(text) =>
                                    this.searchFilterFunction(text)
                                  }
                                />
                              </TouchableWithoutFeedback>
                            </View>

                            <View style={styles.flatListView}>
                              <FlatList
                                style={styles.flatList}
                                data={this.state.data}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                  <View>
                                    <TouchableOpacity
                                      onPress={() => {
                                        selectedTo = item.id;
                                        this.setState({
                                          defaultCurrencyTo: selectedTo,
                                          isVisibleTo: false,
                                          data: currenciesList,
                                        });
                                      }}
                                    >
                                      <View style={styles.modalContainer}>
                                        <Text
                                          style={styles.modalTextCurrencyCode}
                                        >
                                          {item.id}
                                        </Text>
                                        <Text
                                          style={styles.modalTextCurrencyName}
                                        >
                                          {item.title}
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                )}
                              ></FlatList>
                            </View>
                            <View style={styles.backButtonView}>
                              <TouchableOpacity
                                style={styles.backButtonTouchable}
                                onPress={() => {
                                  this.setState({
                                    isVisibleTo: false,
                                  });
                                }}
                              >
                                <Text style={styles.backButtonText}>Back</Text>
                              </TouchableOpacity>
                            </View>
                          </LinearGradient>
                        </SafeAreaView>
                      </View>
                    </LinearGradient>
                  </Modal>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.topRightView}>
              <View style={styles.InputValueView}>
                <View style={styles.headerText}>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 18,
                    }}
                  >
                    Enter Value
                  </Text>
                </View>
                <Text style={styles.inputValue}>{this.state.input}</Text>
              </View>

              <View style={styles.convertButtonView}>
                <TouchableOpacity
                  style={styles.convertButton}
                  onPress={this.currencyConverter}
                >
                  <Text style={styles.convertButtonText}>Convert</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.resultView}>
                <View style={styles.headerText}>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 18,
                    }}
                  >
                    Result
                  </Text>
                </View>
                <Text style={styles.resultText}>{this.state.resultText}</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomView}>
            <View style={styles.keypadView}>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressOne}
              >
                <Text style={styles.textStyle}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressTwo}
              >
                <Text style={styles.textStyle}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressThree}
              >
                <Text style={styles.textStyle}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keypadView}>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressFour}
              >
                <Text style={styles.textStyle}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressFive}
              >
                <Text style={styles.textStyle}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressSix}
              >
                <Text style={styles.textStyle}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keypadView}>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressSeven}
              >
                <Text style={styles.textStyle}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressEight}
              >
                <Text style={styles.textStyle}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressNine}
              >
                <Text style={styles.textStyle}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.keypadView}>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressC}
                onLongPress={this.deleteAll}
              >
                <Text style={[styles.textStyle, styles.C]}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressZero}
              >
                <Text style={styles.textStyle}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableArea}
                onPress={this.onPressDot}
              >
                <Text style={styles.textStyle}>.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    height: "100%",
  },
  topView: {
    flex: 1.5,
    flexDirection: "row",
    marginTop: 30,
  },
  topLeftView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  topLeftViewContainerUp: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    width: "60%",
    marginBottom: 5,
  },
  currencyFrom: {
    fontSize: 25,
    color: "white",
    width: 60,
    textAlign: "center",
  },

  currencyTo: {
    fontSize: 25,
    color: "white",
    width: 60,
    textAlign: "center",
  },
  topLeftViewContainerDown: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  touchableAreaTopLeftTop: {
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 20,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderRightColor: "rgba(0,0,0,0.2)",
  },

  touchableAreaTopLeftBottom: {
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 20,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderRightColor: "rgba(0,0,0,0.2)",
  },
  arrowView: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowTouchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    fontSize: 50,
    color: "#f5f2d0",
    justifyContent: "center",
    alignItems: "center",
  },
  topRightView: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  InputValueView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: "80%",
    paddingVertical: 20,
  },
  inputValue: {
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.05)",
    width: "100%",
    height: 75,
    color: "white",
    fontSize: 25,
    borderRadius: 10,
  },
  convertButtonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: "80%",
  },
  convertButton: {
    backgroundColor: "#rgba(22,143,173, 0.6)",
    borderRadius: 10,
    width: "70%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  convertButtonText: {
    color: "white",
    fontSize: 20,
  },
  resultView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: "80%",
    paddingVertical: 20,
  },
  resultText: {
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.05)",
    width: "100%",
    height: 75,
    color: "white",
    fontSize: 25,
    color: "rgba(255,255,255,0.8)",
    borderRadius: 10,
  },

  modal: {
    flex: 1,
    backgroundColor: "red",
  },
  mainModal: {},
  modalContainer: {
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  modalTextCurrencyCode: {
    color: "#0a313b",
    opacity: 0.9,
    fontSize: 22,
    fontWeight: "bold",
  },
  modalTextCurrencyName: {
    color: "rgba(0,0,0,0.5)",
    fontSize: 16,
  },

  searchBarContainer: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    height: 55,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.07)",
    fontSize: 25,
    paddingHorizontal: 28,
    paddingVertical: 5,
  },
  flatListView: {
    height: "90%",
  },
  flatList: {},
  backButtonView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  backButtonTouchable: {
    backgroundColor: "#rgba(22,143,173,1)",
    borderRadius: 10,
    width: "95%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 25,
  },
  bottomView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 35,
  },
  keypadView: {
    flex: 1,
    flexDirection: "row",
  },
  touchableArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: "white",
    borderRadius: 5,
    margin: 2,
  },
  textStyle: {
    fontSize: 30,
    color: "#168fad",
  },
  C: {
    color: "red",
  },
});
