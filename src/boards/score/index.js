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
  const renderStatus = () => {
    const win = scores.filter(score => score.status === 'won');
    const draw = scores.filter(score => score.status === 'draw');
    const lost = scores.filter(score => score.status === 'lost');
    let totalScore = scores.reduce((prev, score) => {
      if (score.status === 'won') {
        return prev + (score.cpu === 'random' ? 3 : 5);
      }
      if (score.status === 'draw') {
        return prev + (score.cpu === 'random' ? 0 : 1);
      }
      return prev + (score.cpu === 'random' ? -3 : -1);
    }, 0);
    return (
      <View style={styles.scoreWrapper}>
        <Text style={styles.totalScore}>Total score: {totalScore}</Text>
        <Text style={styles.scoreSummary}>
          <Text>Win: {win.length} </Text>
          <Text>Draw: {draw.length} </Text>
          <Text>Lost: {lost.length} </Text>
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Score Boards</Text>
      {renderStatus()}
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
  scoreWrapper: {
    paddingVertical: 16,
    alignItems: 'flex-start',
  },
  totalScore: {
    fontSize: 16,
    paddingBottom: 8,
  },
};

const mapStateToProps = ({tic}) => ({scores: tic.scores});

export default connect(mapStateToProps)(ScoreScreen);
