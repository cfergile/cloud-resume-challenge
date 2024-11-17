document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('download-button').addEventListener('click', function() {
    // Updated the PDF file path to CloudFront URL
    const pdfUrl = 'https://d1vsrn6pd3r8th.cloudfront.net/Claude_Fergile_CV.pdf'; // Replace with your actual CloudFront URL for the PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Claude_Fergile_CV.pdf'; // Specify the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function openModal(project) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');

    switch (project) {
        case 'project1':
            modalTitle.innerText = 'Daily Task Scheduler Application';
            modalDescription.innerText = 'A ride-sharing app that uses CodeCommit, Amplify, Cognito, Lambda, IAM, API Gateway, and DynamoDB.';
            modalImage.src = 'https://d1vsrn6pd3r8th.cloudfront.net/image1.jpg'; // Updated to CloudFront image path
            modalImage.style.display = 'block';
            break;
        case 'project2':
            modalTitle.innerText = 'Continuous Deployment Game';
            modalDescription.innerText = 'A memory card matching game that uses S3 for static website hosting and CodePipeline to set up continuous deployment from GitHub.';
            modalImage.src = 'https://d1vsrn6pd3r8th.cloudfront.net/image2.jpg'; // Updated to CloudFront image path
            modalImage.style.display = 'block';
            break;
        case 'project3':
            modalTitle.innerText = 'End-to-End AWS Web Application';
            modalDescription.innerText = 'A simple math application from scratch that uses Amplify, Lambda, IAM, API Gateway, and DynamoDB.';
            modalImage.src = 'https://d1vsrn6pd3r8th.cloudfront.net/image3.jpg'; // Updated to CloudFront image path
            modalImage.style.display = 'block';
            break;
        case 'project4':
            modalTitle.innerText = 'Bucket List Tracker';
            modalDescription.innerText = 'A bucket list tracker application on AWS Amplify Gen2.';
            modalImage.src = 'https://d1vsrn6pd3r8th.cloudfront.net/image4.jpg'; // Updated to CloudFront image path
            modalImage.style.display = 'block';
            break;
        default:
            modalTitle.innerText = '';
            modalDescription.innerText = '';
            modalImage.style.display = 'none';
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

document.querySelectorAll('.certifications ul li').forEach(item => {
    const badge = document.createElement('img');
    badge.className = 'certification-badge';
    // Updated badge src to CloudFront URL
    badge.src = item.getAttribute('data-badge').replace('path/to/', 'https://d1vsrn6pd3r8th.cloudfront.net/'); 
    item.appendChild(badge);

    item.addEventListener('mouseover', function() {
        badge.style.display = 'block';
        badge.style.opacity = '1';
    });

    item.addEventListener('mouseout', function() {
        badge.style.display = 'none';
        badge.style.opacity = '0';
    });
});

const apiUrl = 'https://vltjoq5hvw2zalr4pt454vct7u0yvels.lambda-url.us-east-1.on.aws/';
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const count = typeof data === 'number' ? data : data.visitorCount;
        counter.innerHTML = `Views: ${count}`;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        counter.innerHTML = 'Unable to fetch visitor count.';
    }
}

updateCounter();
