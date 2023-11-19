import { Card } from '@rneui/themed';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    Image,
    Linking
} from "react-native";

function reduceEvents(events) {
    let reducedEvents = [];

    events.forEach((eventData) => {
        reducedEvents.push({
            title: eventData.title,
            address: eventData.address[0] === '' ? 'Address not listed' : eventData.address[0],
            date: eventData.date.when,
            link: eventData.link,
            thumbnail_img_url: eventData.thumbnail,
            description: eventData.description,
        });
    });

    return reducedEvents;
}

export const Events = ( {events_data} ) => {
    const events = reduceEvents(events_data);

    return (
    <>
        <ScrollView>
        <View style={styles.container}>
            <Card>
            <Card.Title>Events</Card.Title>
            <Card.Divider />
            {events.map((data) => {
                return (
                <View key={data.link} style={styles.user}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: data.thumbnail_img_url }}
                    />
                    <Text adjustsFontSizeToFit style={styles.name} onPress={() => Linking.openURL(data.link)}>{data.title}</Text>
                </View>
                );
            })}
            </Card>
        </View>
        </ScrollView>
    </>
    );
}
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 30,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
        shadowRadius: 5,
        shadowOpacity: .5
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        marginTop: 5,
        marginRight: 30
    },
});
