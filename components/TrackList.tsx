import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import TrackListItem from "./TrackListItem";
import { utilsStyles } from "@/styles";
import TrackPlayer, {Track } from 'react-native-track-player'
import { Image } from "expo-image";
import { unknownTrackImageUri } from "@/constants/images";

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
      ListEmptyComponent={<View>
        <Text style={utilsStyles.emptyContentText}>No songs found</Text>
        <Image 
          source={{
            uri: unknownTrackImageUri,
          }}
          style={utilsStyles.emptyContentImage}
        />
      </View>}
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