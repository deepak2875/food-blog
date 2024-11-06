import React, { useState } from 'react';
import { Container, Card, CardContent, CardMedia, Grid, Button, Box, Typography } from '@mui/material';
import tomatogrill from '../props/tomatogrill.png';
import box from '../props/box.png';
import snacks from '../props/snacks.png';
import cheese from '../props/cheese.png';
import grill from '../props/grill.png';
import crunchwrap from '../props/crunchwrap.png';

const allArticles = [
  { title: 'Grilled Tomatoes at Home', image: tomatogrill, info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.' },
  { title: 'Snacks for Travel', image: snacks, info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.' },
  { title: 'Post-workout Recipes', image: box, info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.' },
  { title: 'How To Grill Corn', image: grill, info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.' },
  { title: 'Crunchwrap Supreme ', image: crunchwrap, info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.' },
  { title: 'Broccoli Cheese Soup', image: cheese, info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.' }
];

const articlesPerPage = 3;

const ArticlesSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

  const currentArticles = allArticles.slice(
    currentPage * articlesPerPage,
    (currentPage + 1) * articlesPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <Box sx={{ overflow: 'hidden', pb: 5 }}>
      <Container
        maxWidth="lg"
        sx={{
          py: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <Typography
          sx={{
            marginBottom: '4.3rem',
            textAlign: 'left',
            fontFamily: 'Source Sans Pro, sans-serif',
            fontSize: '56px',
            fontWeight: '600',
            lineHeight: '42px'
          }}
          color="primary"
          gutterBottom
        >
          Latest Articles
        </Typography>
        
        <Grid container spacing={2} justifyContent="center">
          {currentArticles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{
                width: '100%',
                maxWidth: '381px',
                height: '100%',
                border: '1px solid rgba(147, 162, 211, 0.38)',
                borderRadius: '20.94px',
                flexDirection: 'column',
                justifyContent: 'space-between',
                display: 'flex'
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <CardMedia
                    component="img"
                    image={article.image}
                    alt={article.title}
                    sx={{
                      width: '100%',
                      maxWidth: '326px',
                      height: '258px',
                      borderRadius: '21px',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <CardContent>
                  <Box sx={{ maxWidth: '326px', mx: 'auto' }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '21px',
                        lineHeight: '27px',
                        color: 'rgba(14, 35, 104, 1)',
                        textAlign: 'left'
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '27px',
                        letterSpacing: '-0.02em',
                        textAlign: 'left',
                        color: 'rgba(68, 73, 87, 1)'
                      }}
                    >
                      {article.info}
                    </Typography>
                  </Box>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: '21px',
                      border: '1px solid rgba(66, 73, 97, 1)',
                      fontFamily: 'Open Sans, sans-serif',
                      width: '131px',
                      height: '42px',
                      fontWeight: '700',
                      fontSize: '13px'
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderRadius: '1px',
              border: '1px solid rgba(66, 73, 97, 1)',
              fontFamily: 'Open Sans, sans-serif',
              width: '28px',
              height: '29px',
              minWidth: '27px'
            }}
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            &lt;
          </Button>
          <Typography sx={{ color: 'rgba(66, 73, 97, 1)' }}>
            {currentPage + 1}/{totalPages}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderRadius: '1px',
              border: '1px solid rgba(66, 73, 97, 1)',
              fontFamily: 'Open Sans, sans-serif',
              width: '28px',
              height: '29px',
              minWidth: '27px'
            }}
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
          >
            &gt;
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ArticlesSection;
