import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = { CheckBox_3: true, Toggle_4: true, Input_10: "", Radio_5: true }

  render = () => (
    <View
      style={{
        width: 100,
        height: 100,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        overflow: "scroll",
        textAlign: "left",
        verticalAlign: "text-bottom",
        fontSize: 20,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontStyle: "normal",
        fontWeight: "normal",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://d3nfddh2sbo9hk.cloudfront.net/media/project_component_resources/6_iFduLOO.jpg"
        }}
        style={{
          width: "100%",
          height: 200,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0
        }}
      />
      <CheckBox
        text="Checkbox"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0
        }}
        checked={this.state.CheckBox_3}
        onChange={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <Toggle
        text="switch ON/OFF"
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0
        }}
        checked={this.state.Toggle_4}
        onChange={nextChecked => this.setState({ Toggle_4: nextChecked })}
      />
      <Input
        placeholder="Number Input Placeholder"
        editable={true}
        keyboardType="numeric"
        textStyle={{ fontSize: 20, color: "#000000" }}
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 20,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0
        }}
        value={this.state.Input_10}
        onChangeText={nextValue => this.setState({ Input_10: nextValue })}
      />
      <Radio
        text="Radio button"
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0
        }}
        checked={this.state.Radio_5}
        onChange={nextChecked => this.setState({ Radio_5: nextChecked })}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        step={1}
        disabled={false}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0
        }}
      />
      <Icon
        iconFont="Eva Design Icons"
        name="github"
        width={20}
        height={20}
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          fontSize: 20,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal"
        }}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
