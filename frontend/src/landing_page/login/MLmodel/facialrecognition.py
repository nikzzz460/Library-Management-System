import os
# import pickle
import cv2
import streamlit as st
import face_recognition
from PIL import Image


# Title of the application
st.title("Facial Recognition System")


# Preloaded known face images (Update with your actual file paths)
known_image_paths = [
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i1.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i2.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i3.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i4.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i5.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i6.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i7.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i8.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i9.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i10.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i11.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i12.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i13.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i14.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i165.jpg",
    "D:\React\Library-Management-System\frontend\src\landing_page\login\MLmodel\i17.jpg"
]


# Load known faces and encodings
def load_known_faces(image_paths):
    known_encodings = []
    known_labels = []
    for path in image_paths:
        if os.path.exists(path):
            image = face_recognition.load_image_file(path)
            encoding = face_recognition.face_encodings(image)
            if encoding:
                known_encodings.append(encoding[0])
                known_labels.append(os.path.basename(path))
            else:
                st.warning(f"No face detected in {path}")
        else:
            st.error(f"File not found: {path}")
    return known_encodings, known_labels


known_encodings, known_labels = load_known_faces(known_image_paths)

# Webcam Capture
def capture_from_webcam():
    st.write("Starting webcam...")
    cam = cv2.VideoCapture(0)
    ret, frame = cam.read()
    if ret:
        cam.release()
        st.image(frame, channels="BGR", caption="Captured Image")
        return frame
    else:
        st.error("Failed to capture image from webcam.")
        cam.release()
        return None

# Match Uploaded/Captured Image
def match_face(known_encodings, known_labels, uploaded_image):
    try:
        uploaded_encodings = face_recognition.face_encodings(uploaded_image)

        if not uploaded_encodings:
            st.error("No face detected in the uploaded image.")
            return

        # Compare each face encoding from the uploaded image with known encodings
        for uploaded_encoding in uploaded_encodings:
            results = face_recognition.compare_faces(known_encodings, uploaded_encoding)
            distances = face_recognition.face_distance(known_encodings, uploaded_encoding)

            # Use a threshold to avoid false positives
            threshold = 0.6  # Adjust this threshold to make face matching stricter
            if any(results) and min(distances) < threshold:
                match_index = results.index(True)
                st.success(f"Face Matched: ")
                return

        st.warning("No match found or match not strong enough.")
    except IndexError:
        st.error("No face detected in the uploaded image.")

# Upload an Image
uploaded_file = st.file_uploader("Upload an image (JPG, PNG, JPEG)", type=["jpg", "png", "jpeg"])

if uploaded_file:
    uploaded_image = face_recognition.load_image_file(uploaded_file)
    st.image(uploaded_file, caption="Uploaded Image")
    match_face(known_encodings, known_labels, uploaded_image)

# Capture from Webcam
st.write("Or capture an image from the webcam below.")
if st.button("Capture from Webcam"):
    captured_image = capture_from_webcam()
    if captured_image is not None:
        # Convert OpenCV image (BGR) to RGB
        rgb_image = cv2.cvtColor(captured_image, cv2.COLOR_BGR2RGB)
        match_face(known_encodings, known_labels, rgb_image)



       