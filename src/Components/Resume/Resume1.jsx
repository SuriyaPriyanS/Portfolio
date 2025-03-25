import React, { useState, useEffect } from "react";
import { Button, Grid, Container, Typography, Paper, Fade, Zoom } from "@mui/material";
//import Particle from "../Partical";
import pdf from "../../Assets/SURIYAPRIYAN S(gk Edited) (1).pdf"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { motion } from "framer-motion";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    setShowContent(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container maxWidth={false} className="bg-gray-900 relative min-h-screen py-10">
      {/* <Particle /> */}
      <Fade in={showContent} timeout={1000}>
        <Grid container spacing={3} justifyContent="center" className="relative">
          <Grid item xs={12}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="contained"
                color="primary"
                href={pdf}
                target="_blank"
                className="max-w-xs bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-6 rounded-md flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
                startIcon={<AiOutlineDownload />}
                aria-label="Download Resume"
              >
                <span>Download CV</span>
              </Button>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <Zoom in={showContent} timeout={800}>
              <Typography variant="h4" component="h1" className="text-center text-gray-900 my-6 font-bold">
                My Resume
              </Typography>
            </Zoom>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} className="p-4 rounded-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <Document file={pdf} className="flex justify-center" onLoadError={console.error}>
                  <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
              </motion.div>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <Button
                variant="contained"
                color="primary"
                href={pdf}
                target="_blank"
                className="max-w-xs bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-6 rounded-md flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
                startIcon={<AiOutlineDownload />}
                aria-label="Download Resume"
              >
                <span>Download CV</span>
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
}

export default ResumeNew;