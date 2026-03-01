import TrackList from "@/components/TrackList";
import { screenPadding } from "@/constants/tokens";
import useNavigationSearch from "@/hooks/useNavigationSearch";
import library from "@/assets/data/library.json";
import { useMemo, useState } from "react";
import { trackTitleFilter } from "@/helpers/filter";
import { Platform, TextInput, View } from "react-native";
import { defaultStyles } from "@/styles";

const SongsScreen = () => {
  const [androidSearch, setAndroidSearch] = useState("");

  const iosSearch = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in songs",
    },
  });

  const search = Platform.OS === "ios" ? iosSearch : androidSearch;

  const filteredTracks = useMemo(() => {
    if (!search) return library;
    return library.filter(trackTitleFilter(search));
  }, [search]);

  return (
    <View style={[defaultStyles.container,{ flex: 1 }]}>
      <TrackList
        tracks={filteredTracks}
        contentContainerStyle={{
          paddingHorizontal: screenPadding.horizontal,
          paddingBottom: 120,
        }}
      />
    </View>
  );
};

export default SongsScreen;