import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { unknownTrackImageUri } from "@/constants/images";
import { colors } from "@/constants/tokens";
import { defaultStyles } from "@/styles";
import { Track, useActiveTrack } from "react-native-track-player";
import { Entypo } from "@expo/vector-icons";

export type TrackListItemProps = {
  track: Track;
  onTrackSelect: (track: Track) => void
};

export default function TrackListItem({ track , onTrackSelect: handleTrackSelect}: TrackListItemProps) {
  const isActiveTrack = useActiveTrack()?.url === track.url;
  return (
    <TouchableHighlight onPress={() => handleTrackSelect(track)}>
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: track.artwork ?? unknownTrackImageUri }}
            style={{
              ...styles.image,
              opacity: isActiveTrack ? 0.6 : 1,
            }}
            contentFit="cover"
            cachePolicy="memory-disk"
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Track title + artist */}
          <View style={{ width: "100%" }}>
            <Text
              numberOfLines={1}
              style={{
                ...styles.trackTitleText,
                color: isActiveTrack ? colors.primary : colors.text,
              }}
            >
              {track.title}
            </Text>

            {track.artist && (
              <Text numberOfLines={1} style={styles.trackArtistText}>
                {track.artist}
              </Text>
            )}
          </View>

          <Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  trackTitleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
});
