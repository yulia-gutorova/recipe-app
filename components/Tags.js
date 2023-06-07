import {Text, StyleSheet} from "react-native"

const Tags = ({ t }) => {
    console.log("tags");
    console.log(t);
    return (
        t.map((t, index)=>(<><Text key={index} style={styles.oneTag}>{t}</Text></>))
    )
}

const styles = StyleSheet.create({
    oneTag: {
        backgroundColor: "gray",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        margin:10,
        
    },
})

export default Tags