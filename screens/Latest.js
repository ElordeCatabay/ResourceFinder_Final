import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { upcomingEvents, eventCategory } from '../data/LatestData';

const COLORS = {
  primary: '#3498db',
  secondary: '#252C4A',
  white: 'white',
};

const Latest = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const renderEventItem = ({ item }) => (
    <TouchableOpacity style={styles.eventItem}>
      <Image source={item.image} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryCard,
        { backgroundColor: item.categoryName === selectedCategory ? COLORS.primary : 'white' },
      ]}
      onPress={() => setSelectedCategory(item.categoryName)}
    >
      <Text style={styles.categoryName}>{item.categoryName}</Text>
    </TouchableOpacity>
  );

  const filteredEvents =
    selectedCategory === 'All'
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest Reviewer</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.categoryList}
          data={eventCategory}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={filteredEvents}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 70,
    padding: 20,
  },
  header: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 16,
    color: COLORS.primary,
    marginTop: 50,
  },
  flatListContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  categoryCard: {
    height: 50,
    paddingRight: 25,
    backgroundColor: COLORS.primary,
  },
  categoryName: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  eventItem: {
    width: 150,
    height: 250,
    marginRight: 16,
    marginTop: 25,
    padding: 8,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    color: COLORS.primary,
  },
  eventImage: {
    width: 150,
    height: 120,
    borderRadius: 8,
  },
  eventTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 8,
    color: COLORS.white,
  },
  eventDate: {
    fontSize: 15,
    color: COLORS.white,
    marginHorizontal: 8,
    marginBottom: 16,
  },
});

export default Latest;
