import db, { initDb } from './src/lib/db.js';

initDb();

// Clear existing data to avoid duplicates
db.exec('DELETE FROM ba_projects');
db.exec('DELETE FROM life_hobbies');
db.exec('DELETE FROM services');
db.exec('DELETE FROM career_milestones');
db.exec('DELETE FROM assets');
db.exec('DELETE FROM calendar');

// Seed Profile
const profileStmt = db.prepare(`
  INSERT OR REPLACE INTO profile (
    id, full_name, job_title_model, job_title_ba, bio, avatar_url, 
    fb_link, ig_link, zalo_link, linkedin_link, 
    height, weight, bust, waist, hips, 
    birth_date, address, phone, email, university, gpa, subjects, career_goal, current_location
  )
  VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

profileStmt.run(
  'Hà Thị Thu Phương',
  'Editorial Muse',
  'Business Analyst Professional',
  'Trở thành một BA xuất sắc, cầu nối hoàn hảo giữa công nghệ và mỹ thuật. Creating logical solutions with an aesthetic soul.',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
  'https://www.facebook.com/share/17zvLV3sdQ/',
  'https://www.instagram.com/thuphuong_yams?igsh=a3d2Y3Vvb25vbWNh',
  'https://zalo.me/0325706636',
  'https://github.com/phuongthu',
  160, 48, 85, 64, 92,
  '03/04/2005',
  'Số 4 ngách 24/50 ngõ 24 Đại Mỗ, Từ Liêm, Hà Nội',
  '0325706636',
  'thuphuong342005@gmail.com',
  'Đại học CMC',
  '3.22',
  JSON.stringify(['Phân tích hệ thống thông tin', 'Quản trị dự án phần mềm', 'Thiết kế UI/UX', 'CSDL nâng cao', 'Phân tích yêu cầu']),
  'Khảo sát yêu cầu, tài liệu hóa chuyên nghiệp, tối ưu hóa quy trình doanh nghiệp bằng giải pháp công nghệ.',
  'Hà Nội'
);

// Seed BA Projects
const baProjectStmt = db.prepare(`
  INSERT INTO ba_projects (title, role, description, images, flowchart_url, github_url, tags, grid_class)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

baProjectStmt.run(
  'AI Shoe Identity System',
  'Lead Business Analyst',
  'Hệ thống nhận diện giày thông minh sử dụng AI để hỗ trợ tìm kiếm và phân tích xu hướng thời trang.',
  JSON.stringify([
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80'
  ]),
  '#',
  'https://github.com/phuongthu',
  JSON.stringify(['Python', 'PyTorch', 'React', 'FastAPI']),
  'md:col-span-2 md:row-span-2'
);

baProjectStmt.run(
  'Youth E-Voting App',
  'Senior UI/UX Researcher',
  'Ứng dụng bỏ phiếu điện tử cho thanh niên với tính bảo mật cao và trải nghiệm người dùng tối ưu.',
  JSON.stringify([
    'https://images.unsplash.com/photo-1551288049-bbbda5466b1a?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80'
  ]),
  '#',
  'https://github.com/phuongthu',
  JSON.stringify(['React Native', 'Firebase', 'Figma']),
  'md:col-span-2 md:row-span-1'
);

// Seed Life & Hobbies
const lifeHobbiesStmt = db.prepare(`
  INSERT INTO life_hobbies (image_url, title, thought, date, location)
  VALUES (?, ?, ?, ?, ?)
`);

lifeHobbiesStmt.run(
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80',
  'Team Meeting',
  'Sáng tạo không giới hạn cùng đồng nghiệp.',
  '15/04/2026',
  'CMC Creative Space'
);

lifeHobbiesStmt.run(
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80',
  'Strawberry Latte',
  'Năng lượng ngọt ngào cho một buổi chiều code.',
  '10/04/2026',
  'The Coffee House'
);

// Seed Services
const serviceStmt = db.prepare(`
  INSERT INTO services (mode, title, description, icon_name, benefits, stat_label, stat_value)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

serviceStmt.run('model', 'Fashion Model', 'Chụp lookbook, campaign, runway chuyên nghiệp với phong cách đa dạng.', 'Camera', JSON.stringify(['Lookbook', 'Campaign', 'Runway']), 'Đã thực hiện', '50+ Brand');
serviceStmt.run('ba', 'Business Analysis', 'Khảo sát yêu cầu, tài liệu hóa (SRS, BRD), làm cầu nối giữa Business và Tech.', 'Briefcase', JSON.stringify(['SRS/BRD', 'SQL', 'Agile']), 'Kinh nghiệm', '10+ Dự án');
serviceStmt.run('ba', 'UI/UX Research', 'Thiết kế giao diện hiện đại, tối ưu trải nghiệm người dùng dựa trên data.', 'Palette', JSON.stringify(['Figma', 'Wireframing', 'Prototyping']), 'Rating', '4.9/5');

// Seed Banner Assets
const assetStmt = db.prepare(`
  INSERT INTO assets (type, url, title)
  VALUES (?, ?, ?)
`);

// Model Banners
assetStmt.run('model_banner', 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80', 'Editorial Look 1');
assetStmt.run('model_banner', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80', 'Editorial Look 2');
assetStmt.run('model_banner', 'https://images.unsplash.com/photo-1492706602235-ce0a5509e7ef?auto=format&fit=crop&q=80', 'Editorial Look 3');

// BA Banners
assetStmt.run('ba_banner', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', 'Data Analysis 1');
assetStmt.run('ba_banner', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80', 'Tech Workspace');
assetStmt.run('ba_banner', 'https://images.unsplash.com/photo-1551288049-bbbda5466b1a?auto=format&fit=crop&q=80', 'System Flow');

// Seed Career Milestones
const milestoneStmt = db.prepare(`
  INSERT INTO career_milestones (period, role, company, type, status, description, projects)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

milestoneStmt.run(
  '01/03/2026 - 28/02/2027',
  'Business Analyst',
  'CMC Corporation',
  'Full-time',
  'active',
  'Phân tích nghiệp vụ, điều phối dự án FinTech.',
  JSON.stringify(['AI System', 'Banking App'])
);

milestoneStmt.run(
  '28/12/2025 - 28/02/2026',
  'BA Probational',
  'FPT Software',
  'Probation',
  'completed',
  'Tham gia khảo sát yêu cầu khách hàng Nhật Bản.',
  JSON.stringify(['E-commerce Platform'])
);

milestoneStmt.run(
  '15/09/2025 - 25/12/2025',
  'BA Intern',
  'Viettel Solutions',
  'Internship',
  'completed',
  'Hỗ trợ viết tài liệu SRS và vẽ BPMN.',
  JSON.stringify(['Government Services'])
);

console.log('Seeding complete');
