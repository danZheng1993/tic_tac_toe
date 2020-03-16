import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';

import {Score} from './component';

const ScoreScreen = ({scores}) => {
  const renderItem = ({item}) => <Score detail={item} />;
  const keyExtractor = (item, index) =>
    item.id ? item.id : `score_${item.id}`;
  const renderEmptyState = () => (
    <View>
      <Text>No scores yet.</Text>
    </View>
  );
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Score Boards</Text>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={scores}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmptyState}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 32,
    fontSize: 32,
    textAlign: 'center',
  },
};

const mapStateToProps = ({tic}) => ({scores: tic.scores});

export default connect(mapStateToProps)(ScoreScreen);
