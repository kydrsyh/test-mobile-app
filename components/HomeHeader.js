import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
    const prayerTimes = [
        {
            title: "Fajr",
            time: "04:45"
        },
        {
            title: "Duhr",
            time: "12:02"
        },
        {
            title: "Asr",
            time: "15:23"
        },
        {
            title: "Maghrib",
            time: "17:58"
        },
        {
            title: "Isha",
            time: "19:09"
        },
    ]
    return (
        <View
            style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
            }}
            >
            <View
                style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                }}
            >
                <Image
                source={assets.logo}
                resizeMode="contain"
                style={{ width: 90, height: 25 }}
                />

                <View style={{ width: 45, height: 45 }}>
                <Image
                    source={assets.person01}
                    resizeMode="contain"
                    style={{ width: "100%", height: "100%" }}
                />
                <Image
                    source={assets.badge}
                    resizeMode="contain"
                    style={{
                    position: "absolute",
                    width: 15,
                    height: 15,
                    bottom: 0,
                    right: 0,
                    }}
                />
                </View>
            </View>

            <View style={{ marginVertical: SIZES.font }}>
                <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.white,
                }}
                >
                Hello Khaidarsyah 👋
                </Text>

                <Text
                style={{
                    fontFamily: FONTS.bold,
                    fontSize: SIZES.large,
                    color: COLORS.white,
                    marginTop: SIZES.base / 2,
                }}
                >
                Bissmillahirrahmanirrahim
                </Text>
            </View>

            <View style={{
                backgroundColor: COLORS.white,
                width: "100%",
                height: "auto",
                borderRadius: SIZES.base,
                justifyContent: 'space-between',
                alignItems: "center",
                flexDirection: "column",
            }}>
                <View style={{
                    width: "100%",
                    height: "20",
                    justifyContent: 'space-between',
                    alignItems: "center",
                    flexDirection: "row",
                    padding: SIZES.medium,
                }}>{
                    prayerTimes.map((prayerTime) => (
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: SIZES.font,
                                color: COLORS.primary,
                                textAlign: "center",
                            }}>
                                {prayerTime.title}
                            </Text>
                            <Text style={{
                                fontFamily: FONTS.regular,
                                fontSize: SIZES.small,
                                color: COLORS.gray,
                                textAlign: "center",
                            }}>
                                {prayerTime.time}
                            </Text>
                        </View>
                    ))}
                </View>
                <View
                    style={{
                        width: "90%",
                        borderBottomColor: COLORS.gray,
                        borderBottomWidth: 0.1,
                    }}
                />
                <View style={{
                    width: "100%",
                    padding: SIZES.medium,
                    flexDirection: "row",
                    // justifyContent: "center",
                    alignItems: "center",
                    gap: 15
                }}>
                    <Image 
                        source={assets.person01} 
                        resizeMode="contain"
                        style={{ width: 30, height: 30 }}
                    />
                    <Text style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZES.small
                    }}>
                        Lanjutkan Baca Al-Quran
                    </Text>

                </View>
            </View>
            
        </View>
    );
};

export default HomeHeader;
