import { FlatList, FlatListProps, StyleSheet, View } from "react-native";
import React from "react";
import TrackListItem from "./TrackListItem";
import { utilsStyles } from "@/styles";
import TrackPlayer, {Track } from 'react-native-track-player'

// type Track = {
//   title: string;
//   artwork?: string;
//   image?: string;
// };

type TracksListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const ItemDivider = () => (
  <View
    style={{
      ...utilsStyles.itemSeparator,
      marginVertical: 9,
      marginLeft: 60,
    }}
  />
);

export default function TrackList({
  tracks,
  ...flatlistProps
}: TracksListProps) {

  const handleTrackSelect = async(track: Track) => {
    await TrackPlayer.load(track)
    await TrackPlayer.play()
  }
  return (
    <FlatList<Track>
      data={tracks}
      ItemSeparatorComponent={ItemDivider}
      ListFooterComponent={ItemDivider}
      contentContainerStyle={{
        paddingTop: 50,
        paddingBottom: 128,
      }}
      keyExtractor={(item,index) => item.id}
      renderItem={({ item }) => (
        <TrackListItem
          track={item}
          onTrackSelect={handleTrackSelect}
        />
      )}
      {...flatlistProps}
    />
  );
}

const styles = StyleSheet.create({});