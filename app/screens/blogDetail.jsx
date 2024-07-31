import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// Sample blog data; in a real application, this data might come from a backend service
const blogData = [
  {
    id: 1,
    title: "Casual Summer Outfit Ideas",
    writer_name: "Jasmine Kapoor",
    writer_profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYfcQHCmU0e_eoJVvJNnwzIM9dlBbWOj1Qg&s",
    images: [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17295882/2022/3/9/4c237cbc-e6b2-449b-a47a-e1acd37d3d471646824940676-KASSUALLY-Women-Dresses-8551646824940191-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28550848/2024/3/28/31c7c076-7015-41d4-8781-4db11b64a4da1711624772876ONLYCheckedFitFlareDress1.jpg"
    ],
    content: "As the summer sun blazed on, my wardrobe evolved to include pieces that were not only stylish but also comfortable and versatile. Here's a roundup of my constant favorites this summer that became my go-to choices for various occasions...",
    product_links: [
      {
        text: "Dress",
        url: "https://example.com/dress"
      },
      {
        text: "Bag",
        url: "https://example.com/bag"
      }
    ]
  },
  {
    id: 2,
    title: "Midi Dress and Sandals",
    writer_name: "Mrunal Mittal",
    writer_profile_image: "https://www.dell.com/wp-uploads/2022/11/Human-like-Avatar-3-640x480.jpg",
    images: [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21160314/2023/2/4/2b6c1d13-0dbf-41a5-85e3-adc8433185201675482653881-COVER-STORY--Checked-Sheath-Dress-2801675482653291-1.jpg"
    ],
    content: "This midi dress is perfect for warm weather...",
    product_links: [
      {
        text: "Sandals",
        url: "https://example.com/sandals"
      }
    ]
  }
];

export default function BlogDetailScreen() {
  const { query } = useRouter(); // Use useRouter from expo-router
  const id = query?.id; // Extract id from query

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      const foundBlog = blogData.find(blog => blog.id == id);
      setBlog(foundBlog);
    }
  }, [id]);

  if (!id) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!blog) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Blog not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.writerContainer}>
        <Image source={{ uri: blog.writer_profile_image }} style={styles.writerImage} />
        <Text style={styles.writerName}>{blog.writer_name}</Text>
      </View>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.content}>{blog.content}</Text>
      {blog.images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ))}
      <View style={styles.productLinks}>
        {blog.product_links.map((link, index) => (
          <Text key={index} style={styles.productLink}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
  writerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  writerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  writerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  productLinks: {
    marginTop: 16,
  },
  productLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
