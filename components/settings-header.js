import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, ViewPropTypes, TextStylePropTypes, StyleSheetPropType } from 'react-native';

export default class SettingsHeader extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        let title = this.props.title || 'Settings';

        return (
            <View style={[styles.headerRow, this.props.headerStyle]}>
                <Text style={[styles.headerText, this.props.titleStyle]}>{title}</Text>
            </View>
        );
    }
}

const textStylePropType = StyleSheetPropType(TextStylePropTypes);

SettingsHeader.propTypes = {
    title: PropTypes.string,
    onBackButtonPress: PropTypes.func,
    headerStyle: ViewPropTypes.style,
    titleStyle: textStylePropType,
    backText: PropTypes.string,
    backTextStyle: textStylePropType,
};

const styles = StyleSheet.create({
    headerRow: {
        width: '100%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgb(167, 167, 171)',
        paddingVertical: 14,
        backgroundColor: 'rgb(245, 245, 247)',
    },
    headerText: {
        fontSize: 26,
        color: 'black',

    },
    backView: {

    }
    backText: {
        fontSize: 26,
        color: 'rgb(6, 135, 255)',
    },
    chevron: {
        color: 'rgb(6, 135, 255)',
        fontSize: 42,
    }
});