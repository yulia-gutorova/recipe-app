import { Text, StyleSheet, View } from "react-native"

const Tags = ({ t }) => {
    return (
        <View style={styles.container}>
            {t.map((t, index) => {
                return (<><Text key={index} style={styles.oneTag}>{t}</Text></>)
            })}
        </View>
    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-around"
    },
    oneTag: {
        backgroundColor: "gray",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        margin: 5,
    },
})

export default Tags