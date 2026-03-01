import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { unknownTrackImageUri } from "@/constants/images";
import { colors } from "@/constants/tokens";
import { defaultStyles } from "@/styles";
import { Track, useActiveTrack, useIsPlaying } from "react-native-track-player";
import { Entypo, Ionicons } from "@expo/vector-icons";
import LoaderKit from "react-native-loader-kit";

export type TrackListItemProps = {
  track: Track;
  onTrackSelect: (track: Track) => void;
};

export default function TrackListItem({
  track,
  onTrackSelect: handleTrackSelect,
}: TrackListItemProps) {
  const { playing } = useIsPlaying();

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

          {isActiveTrack &&
            (playing ? (
              <LoaderKit
                style={styles.trackPlayingIconIndicator}
                name="LineScaleParty"
                color={colors.icon}
              />
            ) : (
              <Ionicons
                style={styles.trackPausedIndicator}
                name="play"
                size={24}
                color={colors.icon}
              />
            ))}
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
  trackPlayingIconIndicator: {
    position: "absolute",
    top: 18,
    left: 16,
    width: 16,
    height: 16,
  },
  trackPausedIndicator: {
    position: "absolute",
    top: 14,
    left: 14,
  },
});
