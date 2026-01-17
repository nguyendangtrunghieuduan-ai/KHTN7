
import { Lesson } from './types';

// Helper function to generate placeholder images matching the context
const getPlaceHolder = (text: string) => `https://placehold.co/600x400/f1f5f9/334155?text=${encodeURIComponent(text)}`;

export const CURRICULUM: Lesson[] = [
  // =================================================================
  // PHẦN 2: CHẤT VÀ SỰ BIẾN ĐỔI (HÓA HỌC)
  // =================================================================
  {
    id: 'bai-2',
    topic: 'PHẦN 2: CHẤT VÀ SỰ BIẾN ĐỔI',
    title: 'Bài 2: Nguyên Tử',
    colorTheme: 'from-pink-500 to-rose-500',
    objectives: ['Cấu tạo nguyên tử', 'Hạt nhân và vỏ electron', 'Khối lượng nguyên tử'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b2-q1', difficulty: 'NB', question: 'Hạt nhân nguyên tử mang điện tích gì?', options: [{ key: 'A', text: 'Không mang điện.' }, { key: 'B', text: 'Điện tích âm.' }, { key: 'C', text: 'Điện tích dương.' }, { key: 'D', text: 'Có thể âm hoặc dương.' }], correctAnswer: 'C', explanation: 'Hạt nhân chứa proton mang điện dương.' },
        { id: 'b2-q2', difficulty: 'TH', question: 'Trong nguyên tử, các electron sắp xếp như thế nào?', options: [{ key: 'A', text: 'Hỗn độn trong hạt nhân.' }, { key: 'B', text: 'Theo từng lớp xung quanh hạt nhân.' }, { key: 'C', text: 'Xen kẽ với các proton.' }, { key: 'D', text: 'Đứng yên tại vỏ nguyên tử.' }], correctAnswer: 'B', explanation: 'Theo mô hình Rutherford – Bohr, electron chuyển động quanh hạt nhân theo từng lớp.' },
        { id: 'b2-q3', difficulty: 'NB', question: 'Khối lượng nguyên tử tập trung chủ yếu ở phần nào?', options: [{ key: 'A', text: 'Lớp vỏ electron.' }, { key: 'B', text: 'Hạt nhân.' }, { key: 'C', text: 'Phân bố đều.' }, { key: 'D', text: 'Ở khoảng không gian rỗng.' }], correctAnswer: 'B', explanation: 'Electron có khối lượng rất nhỏ không đáng kể so với proton và neutron trong hạt nhân.' },
        { id: 'b2-q4', difficulty: 'NB', question: 'Hạt vô cùng nhỏ, trung hòa về điện tạo nên chất là:', options: [{ key: 'A', text: 'Tế bào.' }, { key: 'B', text: 'Nguyên tử.' }, { key: 'C', text: 'Proton.' }, { key: 'D', text: 'Electron.' }], correctAnswer: 'B', explanation: 'Định nghĩa nguyên tử là hạt vô cùng nhỏ và trung hòa về điện.' },
        { id: 'b2-q5', difficulty: 'TH', question: 'Trong nguyên tử, số proton luôn bằng số hạt nào?', options: [{ key: 'A', text: 'Neutron.' }, { key: 'B', text: 'Electron.' }, { key: 'C', text: 'Hạt nhân.' }, { key: 'D', text: 'Không bằng hạt nào.' }], correctAnswer: 'B', explanation: 'Nguyên tử trung hòa về điện nên số p (+) = số e (-).' },
        { id: 'b2-q6', difficulty: 'NB', question: 'Đơn vị đo khối lượng nguyên tử là:', options: [{ key: 'A', text: 'kg.' }, { key: 'B', text: 'g.' }, { key: 'C', text: 'amu.' }, { key: 'D', text: 'ml.' }], correctAnswer: 'C', explanation: 'Đơn vị khối lượng nguyên tử quốc tế là amu.' },
        { id: 'b2-q7', difficulty: 'NB', question: 'Lớp electron trong cùng (gần hạt nhân nhất) chứa tối đa bao nhiêu electron?', options: [{ key: 'A', text: '2.' }, { key: 'B', text: '8.' }, { key: 'C', text: '18.' }, { key: 'D', text: '32.' }], correctAnswer: 'A', explanation: 'Lớp thứ nhất chứa tối đa 2 electron.' },
        { id: 'b2-q8', difficulty: 'NB', question: 'Thành phần cấu tạo của nguyên tử gồm:', options: [{ key: 'A', text: 'Hạt nhân và vỏ electron.' }, { key: 'B', text: 'Proton và Neutron.' }, { key: 'C', text: 'Electron và Proton.' }, { key: 'D', text: 'Hạt nhân và Proton.' }], correctAnswer: 'A', explanation: 'Nguyên tử gồm hạt nhân bên trong và vỏ electron bên ngoài.' },
        { id: 'b2-q9', difficulty: 'NB', question: 'Hạt mang điện tích âm trong nguyên tử là:', options: [{ key: 'A', text: 'Proton.' }, { key: 'B', text: 'Neutron.' }, { key: 'C', text: 'Electron.' }, { key: 'D', text: 'Hạt nhân.' }], correctAnswer: 'C', explanation: 'Electron mang điện tích âm, Proton mang điện dương, Neutron không mang điện.' },
        { id: 'b2-q10', difficulty: 'NB', question: 'Hạt neutron có đặc điểm gì về điện?', options: [{ key: 'A', text: 'Mang điện dương.' }, { key: 'B', text: 'Mang điện âm.' }, { key: 'C', text: 'Không mang điện.' }, { key: 'D', text: 'Mang cả hai loại điện.' }], correctAnswer: 'C', explanation: 'Proton (+), Electron (-), Neutron không mang điện.' }
      ],
      essay: [
        { id: 'b2-e1', difficulty: 'TH', question: 'Mô tả mô hình nguyên tử Rutherford – Bohr.', sampleAnswer: 'Nêu được hạt nhân ở tâm mang điện dương, electron ở vỏ mang điện âm. Electron chuyển động quanh hạt nhân theo từng lớp như hành tinh quay quanh Mặt Trời.' },
        { id: 'b2-e2', difficulty: 'VD', question: 'Một nguyên tử Nitrogen có 7 proton. Hãy xác định số electron, điện tích hạt nhân và vẽ sơ đồ cấu tạo đơn giản.', sampleAnswer: 'Số e = 7 (do p=e). Điện tích hạt nhân = +7. Vẽ vòng tròn tâm ghi +7, lớp 1 có 2e, lớp 2 có 5e.' }
      ]
    }
  },
  {
    id: 'bai-3',
    topic: 'PHẦN 2: CHẤT VÀ SỰ BIẾN ĐỔI',
    title: 'Bài 3: Nguyên Tố Hóa Học',
    colorTheme: 'from-purple-500 to-indigo-500',
    objectives: ['Định nghĩa nguyên tố', 'Kí hiệu hóa học', 'Số hiệu nguyên tử'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b3-q1', difficulty: 'NB', question: 'Nguyên tố hóa học là tập hợp các nguyên tử có cùng số lượng hạt nào?', options: [{ key: 'A', text: 'Neutron.' }, { key: 'B', text: 'Electron.' }, { key: 'C', text: 'Proton.' }, { key: 'D', text: 'Hạt nhân.' }], correctAnswer: 'C', explanation: 'Nguyên tố hóa học là tập hợp các nguyên tử có cùng số proton trong hạt nhân.' },
        { id: 'b3-q2', difficulty: 'NB', question: 'Kí hiệu hóa học của nguyên tố Calcium là:', options: [{ key: 'A', text: 'C.' }, { key: 'B', text: 'Ca.' }, { key: 'C', text: 'Cu.' }, { key: 'D', text: 'Cl.' }], correctAnswer: 'B', explanation: 'Ca là Calcium, C là Carbon, Cu là Copper, Cl là Chlorine.' },
        { id: 'b3-q3', difficulty: 'TH', question: 'Số hiệu nguyên tử cho biết thông tin gì?', options: [{ key: 'A', text: 'Số proton và số electron.' }, { key: 'B', text: 'Số neutron.' }, { key: 'C', text: 'Khối lượng nguyên tử.' }, { key: 'D', text: 'Số lớp electron.' }], correctAnswer: 'A', explanation: 'Số hiệu nguyên tử = số p = số e.' },
        { id: 'b3-q4', difficulty: 'NB', question: 'Tên gọi của nguyên tố có kí hiệu Na là:', options: [{ key: 'A', text: 'Nitrogen.' }, { key: 'B', text: 'Neon.' }, { key: 'C', text: 'Sodium (Natri).' }, { key: 'D', text: 'Nickel.' }], correctAnswer: 'C', explanation: 'Na là kí hiệu của Sodium (Natri).' },
        { id: 'b3-q5', difficulty: 'TH', question: 'Nguyên tố phổ biến nhất trong vỏ Trái Đất là:', options: [{ key: 'A', text: 'Oxygen.' }, { key: 'B', text: 'Silicon.' }, { key: 'C', text: 'Aluminum.' }, { key: 'D', text: 'Iron.' }], correctAnswer: 'A', explanation: 'Oxygen chiếm khoảng gần 50% khối lượng vỏ Trái Đất.' },
        { id: 'b3-q6', difficulty: 'NB', question: 'Mỗi nguyên tố hóa học được biểu diễn bằng:', options: [{ key: 'A', text: 'Một chữ cái in hoa.' }, { key: 'B', text: 'Hai chữ cái in hoa.' }, { key: 'C', text: 'Một hoặc hai chữ cái, chữ đầu in hoa.' }, { key: 'D', text: 'Tên đầy đủ của nguyên tố.' }], correctAnswer: 'C', explanation: 'Quy tắc kí hiệu hóa học (VD: H, He).' },
        { id: 'b3-q7', difficulty: 'VD', question: 'Nguyên tố Carbon có số hiệu nguyên tử là 6. Số electron của nó là:', options: [{ key: 'A', text: '6.' }, { key: 'B', text: '12.' }, { key: 'C', text: '18.' }, { key: 'D', text: '2.' }], correctAnswer: 'A', explanation: 'Trong nguyên tử trung hòa, Số electron = Số proton = Số hiệu nguyên tử = 6.' },
        { id: 'b3-q8', difficulty: 'NB', question: 'Kí hiệu hóa học "Al" chỉ nguyên tố nào?', options: [{ key: 'A', text: 'Argon.' }, { key: 'B', text: 'Silver.' }, { key: 'C', text: 'Gold.' }, { key: 'D', text: 'Aluminium.' }], correctAnswer: 'D', explanation: 'Al là Aluminium (Nhôm).' },
        { id: 'b3-q9', difficulty: 'TH', question: 'Các nguyên tử thuộc cùng một nguyên tố hóa học có tính chất gì giống nhau?', options: [{ key: 'A', text: 'Số neutron.' }, { key: 'B', text: 'Khối lượng nguyên tử.' }, { key: 'C', text: 'Tính chất hóa học.' }, { key: 'D', text: 'Số lớp electron.' }], correctAnswer: 'C', explanation: 'Do có cùng số p và e (đặc biệt e lớp ngoài cùng quyết định tính chất hóa học).' },
        { id: 'b3-q10', difficulty: 'NB', question: 'Kí hiệu hóa học của Hydrogen là:', options: [{ key: 'A', text: 'Hy.' }, { key: 'B', text: 'H.' }, { key: 'C', text: 'He.' }, { key: 'D', text: 'Hg.' }], correctAnswer: 'B', explanation: 'H là Hydrogen, He là Helium, Hg là Mercury.' }
      ],
      essay: [
        { id: 'b3-e1', difficulty: 'TH', question: 'Định nghĩa nguyên tố hóa học. Tại sao số proton được dùng để xác định nguyên tố mà không phải là số neutron?', sampleAnswer: 'Nguyên tố là tập hợp nguyên tử cùng số proton. Số proton là đặc trưng vì nó cố định, quyết định số electron và tính chất hóa học, còn neutron có thể thay đổi (đồng vị).' },
        { id: 'b3-e2', difficulty: 'VD', question: 'Viết kí hiệu hóa học và tên của 3 nguyên tố kim loại và 3 nguyên tố phi kim mà em biết.', sampleAnswer: 'Kim loại: Fe (Iron), Cu (Copper), Al (Aluminium). Phi kim: O (Oxygen), N (Nitrogen), C (Carbon).' }
      ]
    }
  },
  {
    id: 'bai-4',
    topic: 'PHẦN 2: CHẤT VÀ SỰ BIẾN ĐỔI',
    title: 'Bài 4: Sơ Lược Bảng Tuần Hoàn',
    colorTheme: 'from-orange-500 to-amber-500',
    objectives: ['Cấu tạo bảng tuần hoàn', 'Chu kì và Nhóm', 'Phân loại nguyên tố'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b4-q1', difficulty: 'NB', question: 'Bảng tuần hoàn được sắp xếp theo nguyên tắc nào?', options: [{ key: 'A', text: 'Chiều giảm dần khối lượng nguyên tử.' }, { key: 'B', text: 'Chiều tăng dần điện tích hạt nhân.' }, { key: 'C', text: 'Chiều tăng dần tỉ trọng.' }, { key: 'D', text: 'Theo thứ tự bảng chữ cái.' }], correctAnswer: 'B', explanation: 'Nguyên tắc cơ bản là chiều tăng dần điện tích hạt nhân (số proton).' },
        { id: 'b4-q2', difficulty: 'NB', question: 'Chu kì trong bảng tuần hoàn là:', options: [{ key: 'A', text: 'Cột dọc.' }, { key: 'B', text: 'Hàng ngang.' }, { key: 'C', text: 'Đường chéo.' }, { key: 'D', text: 'Nhóm nguyên tố.' }], correctAnswer: 'B', explanation: 'Chu kì là dãy các nguyên tố xếp hàng ngang có cùng số lớp electron.' },
        { id: 'b4-q3', difficulty: 'TH', question: 'Các nguyên tố trong cùng một nhóm A có đặc điểm gì?', options: [{ key: 'A', text: 'Cùng số lớp electron.' }, { key: 'B', text: 'Cùng số hiệu nguyên tử.' }, { key: 'C', text: 'Số electron lớp ngoài cùng bằng nhau.' }, { key: 'D', text: 'Khối lượng bằng nhau.' }], correctAnswer: 'C', explanation: 'Cùng nhóm A có số e lớp ngoài cùng bằng nhau -> tính chất hóa học tương tự.' },
        { id: 'b4-q4', difficulty: 'NB', question: 'Bảng tuần hoàn hiện nay có bao nhiêu chu kì?', options: [{ key: 'A', text: '5.' }, { key: 'B', text: '6.' }, { key: 'C', text: '7.' }, { key: 'D', text: '8.' }], correctAnswer: 'C', explanation: 'Gồm 7 chu kì (3 chu kì nhỏ, 4 chu kì lớn).' },
        { id: 'b4-q5', difficulty: 'TH', question: 'Vị trí của nhóm kim loại kiềm trong bảng tuần hoàn là:', options: [{ key: 'A', text: 'Nhóm IA.' }, { key: 'B', text: 'Nhóm VIIA.' }, { key: 'C', text: 'Nhóm VIIIA.' }, { key: 'D', text: 'Nhóm IIA.' }], correctAnswer: 'A', explanation: 'Nhóm IA là kim loại kiềm (trừ Hydrogen).' },
        { id: 'b4-q6', difficulty: 'NB', question: 'Nhóm VIIIA gồm các nguyên tố nào?', options: [{ key: 'A', text: 'Kim loại kiềm.' }, { key: 'B', text: 'Halogen.' }, { key: 'C', text: 'Khí hiếm.' }, { key: 'D', text: 'Kim loại kiềm thổ.' }], correctAnswer: 'C', explanation: 'Nhóm cuối cùng của bảng tuần hoàn là khí hiếm, trơ về mặt hóa học.' },
        { id: 'b4-q7', difficulty: 'NB', question: 'Ô nguyên tố cho biết thông tin gì?', options: [{ key: 'A', text: 'Số hiệu nguyên tử.' }, { key: 'B', text: 'Kí hiệu hóa học.' }, { key: 'C', text: 'Tên nguyên tố và khối lượng nguyên tử.' }, { key: 'D', text: 'Tất cả các ý trên.' }], correctAnswer: 'D', explanation: 'Ô nguyên tố cung cấp đầy đủ các thông tin cơ bản về nguyên tố.' },
        { id: 'b4-q8', difficulty: 'VD', question: 'Nguyên tố ở chu kì 3 có bao nhiêu lớp electron?', options: [{ key: 'A', text: '1 lớp.' }, { key: 'B', text: '2 lớp.' }, { key: 'C', text: '3 lớp.' }, { key: 'D', text: '8 lớp.' }], correctAnswer: 'C', explanation: 'Số thứ tự chu kì = số lớp electron.' },
        { id: 'b4-q9', difficulty: 'TH', question: 'Các nguyên tố phi kim thường nằm ở đâu trong bảng tuần hoàn?', options: [{ key: 'A', text: 'Góc trái bên dưới.' }, { key: 'B', text: 'Góc phải bên trên.' }, { key: 'C', text: 'Ở giữa bảng.' }, { key: 'D', text: 'Nhóm IA và IIA.' }], correctAnswer: 'B', explanation: 'Phi kim tập trung ở phía trên bên phải của bảng tuần hoàn.' },
        { id: 'b4-q10', difficulty: 'NB', question: 'Mendeleev là nhà khoa học nước nào?', options: [{ key: 'A', text: 'Anh.' }, { key: 'B', text: 'Pháp.' }, { key: 'C', text: 'Nga.' }, { key: 'D', text: 'Đức.' }], correctAnswer: 'C', explanation: 'Dimitri Mendeleev là nhà hóa học người Nga.' }
      ],
      essay: [
        { id: 'b4-e1', difficulty: 'TH', question: 'Nêu cấu tạo của bảng tuần hoàn (ô, chu kì, nhóm).', sampleAnswer: 'Ô (thông tin nguyên tố), Chu kì (hàng ngang, nguyên tố cùng số lớp e), Nhóm (cột dọc, nguyên tố cùng số e hóa trị/tính chất).' },
        { id: 'b4-e2', difficulty: 'VD', question: 'Xác định vị trí (ô, chu kì, nhóm) của nguyên tố Oxygen (Z=8) trong bảng tuần hoàn.', sampleAnswer: 'Z=8 → Ô số 8. Có 2 lớp e (2, 6) → Chu kì 2. Có 6e lớp ngoài cùng → Nhóm VIA.' }
      ]
    }
  },
  {
    id: 'bai-5',
    topic: 'PHẦN 2: CHẤT VÀ SỰ BIẾN ĐỔI',
    title: 'Bài 5: Phân Tử - Đơn Chất - Hợp Chất',
    colorTheme: 'from-teal-500 to-emerald-500',
    objectives: ['Khái niệm phân tử', 'Phân biệt đơn chất, hợp chất', 'Tính phân tử khối'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b5-q1', difficulty: 'NB', question: 'Phân tử là gì?', options: [{ key: 'A', text: 'Hạt đại diện cho chất, mang đầy đủ tính chất hóa học của chất.' }, { key: 'B', text: 'Hạt nhỏ nhất của chất.' }, { key: 'C', text: 'Tập hợp các electron.' }, { key: 'D', text: 'Khối lượng của chất.' }], correctAnswer: 'A', explanation: 'Định nghĩa chuẩn của phân tử.' },
        { id: 'b5-q2', difficulty: 'NB', question: 'Đơn chất là chất được tạo nên từ:', options: [{ key: 'A', text: 'Một nguyên tử.' }, { key: 'B', text: 'Một nguyên tố hóa học.' }, { key: 'C', text: 'Hai nguyên tố hóa học trở lên.' }, { key: 'D', text: 'Nhiều loại nguyên tử khác nhau.' }], correctAnswer: 'B', explanation: 'Đơn chất do 1 nguyên tố tạo nên (vd: O2, Cu, Fe).' },
        { id: 'b5-q3', difficulty: 'NB', question: 'Hợp chất là chất được tạo nên từ:', options: [{ key: 'A', text: 'Một nguyên tố hóa học.' }, { key: 'B', text: 'Hai nguyên tố hóa học trở lên.' }, { key: 'C', text: 'Chỉ kim loại.' }, { key: 'D', text: 'Chỉ phi kim.' }], correctAnswer: 'B', explanation: 'Hợp chất chứa từ 2 loại nguyên tố trở lên (vd: H2O, CO2).' },
        { id: 'b5-q4', difficulty: 'TH', question: 'Chất nào sau đây là đơn chất?', options: [{ key: 'A', text: 'Khí Carbon dioxide (CO2).' }, { key: 'B', text: 'Muối ăn (NaCl).' }, { key: 'C', text: 'Khí Nitrogen (N2).' }, { key: 'D', text: 'Nước (H2O).' }], correctAnswer: 'C', explanation: 'N2 chỉ gồm nguyên tố Nitrogen.' },
        { id: 'b5-q5', difficulty: 'TH', question: 'Chất nào sau đây là hợp chất?', options: [{ key: 'A', text: 'Kim loại Copper (Cu).' }, { key: 'B', text: 'Khí Oxygen (O2).' }, { key: 'C', text: 'Kim loại Iron (Fe).' }, { key: 'D', text: 'Acid Sulfuric (H2SO4).' }], correctAnswer: 'D', explanation: 'H2SO4 gồm 3 nguyên tố: Hydrogen, Sulfur, Oxygen.' },
        { id: 'b5-q6', difficulty: 'VD', question: 'Phân tử khối của nước (H2O) là bao nhiêu? (Biết H=1, O=16)', options: [{ key: 'A', text: '17 amu.' }, { key: 'B', text: '18 amu.' }, { key: 'C', text: '33 amu.' }, { key: 'D', text: '16 amu.' }], correctAnswer: 'B', explanation: '2*1 + 16 = 18 amu.' },
        { id: 'b5-q7', difficulty: 'TH', question: 'Khí Ozone (O3) là:', options: [{ key: 'A', text: 'Hợp chất.' }, { key: 'B', text: 'Đơn chất.' }, { key: 'C', text: 'Hỗn hợp.' }, { key: 'D', text: 'Nguyên tử.' }], correctAnswer: 'B', explanation: 'Tạo bởi duy nhất 1 nguyên tố Oxygen.' },
        { id: 'b5-q8', difficulty: 'TH', question: 'Muối ăn (NaCl) được tạo bởi các nguyên tố:', options: [{ key: 'A', text: 'Nitrogen và Chlorine.' }, { key: 'B', text: 'Sodium và Carbon.' }, { key: 'C', text: 'Sodium và Chlorine.' }, { key: 'D', text: 'Sulfur và Calcium.' }], correctAnswer: 'C', explanation: 'Na (Sodium) và Cl (Chlorine).' },
        { id: 'b5-q9', difficulty: 'TH', question: 'Vỏ dây điện thường làm bằng nhựa (PVC) là hợp chất, lõi dây làm bằng đồng (Cu) là:', options: [{ key: 'A', text: 'Hợp chất.' }, { key: 'B', text: 'Đơn chất.' }, { key: 'C', text: 'Phân tử khí.' }, { key: 'D', text: 'Hỗn hợp.' }], correctAnswer: 'B', explanation: 'Đồng là kim loại, được tạo từ 1 nguyên tố Cu.' },
        { id: 'b5-q10', difficulty: 'VD', question: 'Phân tử khối của khí Carbon dioxide (CO2) là: (C=12, O=16)', options: [{ key: 'A', text: '28 amu.' }, { key: 'B', text: '44 amu.' }, { key: 'C', text: '32 amu.' }, { key: 'D', text: '18 amu.' }], correctAnswer: 'B', explanation: '12 + 16*2 = 44 amu.' }
      ],
      essay: [
        { id: 'b5-e1', difficulty: 'TH', question: 'Phân biệt đơn chất và hợp chất. Cho ví dụ minh họa.', sampleAnswer: 'Đơn chất tạo từ 1 nguyên tố (Cu, O2). Hợp chất tạo từ 2 nguyên tố trở lên (NaCl, H2O).' },
        { id: 'b5-e2', difficulty: 'VD', question: 'Tính phân tử khối của Calcium carbonate (CaCO3). Biết Ca=40, C=12, O=16.', sampleAnswer: '40 + 12 + (16*3) = 100 amu.' }
      ]
    }
  },
  {
    id: 'bai-6',
    topic: 'PHẦN 2: CHẤT VÀ SỰ BIẾN ĐỔI',
    title: 'Bài 6: Giới Thiệu Về Liên Kết Hóa Học',
    colorTheme: 'from-cyan-500 to-blue-500',
    objectives: ['Liên kết Ion', 'Liên kết Cộng hóa trị'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b6-q1', difficulty: 'NB', question: 'Liên kết ion thường hình thành giữa:', options: [{ key: 'A', text: 'Kim loại điển hình và phi kim điển hình.' }, { key: 'B', text: 'Hai phi kim.' }, { key: 'C', text: 'Hai kim loại.' }, { key: 'D', text: 'Khí hiếm và kim loại.' }], correctAnswer: 'A', explanation: 'Do sự nhường và nhận electron tạo ion trái dấu hút nhau.' },
        { id: 'b6-q2', difficulty: 'NB', question: 'Liên kết cộng hóa trị thường hình thành giữa:', options: [{ key: 'A', text: 'Kim loại và phi kim.' }, { key: 'B', text: 'Hai phi kim.' }, { key: 'C', text: 'Hai kim loại.' }, { key: 'D', text: 'Khí hiếm.' }], correctAnswer: 'B', explanation: 'Do dùng chung cặp electron.' },
        { id: 'b6-q3', difficulty: 'TH', question: 'Trong phân tử muối ăn (NaCl), liên kết là:', options: [{ key: 'A', text: 'Cộng hóa trị.' }, { key: 'B', text: 'Ion.' }, { key: 'C', text: 'Kim loại.' }, { key: 'D', text: 'Hydrogen.' }], correctAnswer: 'B', explanation: 'Na nhường e cho Cl tạo Na+ và Cl-.' },
        { id: 'b6-q4', difficulty: 'TH', question: 'Trong phân tử nước (H2O), liên kết là:', options: [{ key: 'A', text: 'Ion.' }, { key: 'B', text: 'Cộng hóa trị.' }, { key: 'C', text: 'Kim loại.' }, { key: 'D', text: 'Bền vững tuyệt đối.' }], correctAnswer: 'B', explanation: 'O và H là phi kim, dùng chung electron.' },
        { id: 'b6-q5', difficulty: 'NB', question: 'Khí hiếm bền vững vì:', options: [{ key: 'A', text: 'Có 8 electron ở lớp ngoài cùng (trừ Helium có 2e).' }, { key: 'B', text: 'Có khối lượng lớn.' }, { key: 'C', text: 'Không có electron.' }, { key: 'D', text: 'Có hạt nhân rất lớn.' }], correctAnswer: 'A', explanation: 'Cấu hình electron bão hòa, bền vững.' },
        { id: 'b6-q6', difficulty: 'TH', question: 'Khi hình thành liên kết ion trong NaCl, nguyên tử Na đã:', options: [{ key: 'A', text: 'Nhận 1 electron.' }, { key: 'B', text: 'Nhường 1 electron.' }, { key: 'C', text: 'Dùng chung 1 electron.' }, { key: 'D', text: 'Không thay đổi.' }], correctAnswer: 'B', explanation: 'Na (Z=11) nhường 1e để đạt cấu hình bền vững của khí hiếm Ne.' },
        { id: 'b6-q7', difficulty: 'TH', question: 'Hợp chất nào sau đây là hợp chất cộng hóa trị?', options: [{ key: 'A', text: 'NaCl.' }, { key: 'B', text: 'MgO.' }, { key: 'C', text: 'CO2.' }, { key: 'D', text: 'CaCl2.' }], correctAnswer: 'C', explanation: 'CO2 tạo bởi 2 phi kim C và O.' },
        { id: 'b6-q8', difficulty: 'TH', question: 'Hợp chất nào sau đây là hợp chất ion?', options: [{ key: 'A', text: 'H2.' }, { key: 'B', text: 'CH4.' }, { key: 'C', text: 'MgO.' }, { key: 'D', text: 'NH3.' }], correctAnswer: 'C', explanation: 'Mg (kim loại) và O (phi kim).' },
        { id: 'b6-q9', difficulty: 'NB', question: 'Liên kết trong phân tử khí Oxygen (O2) được hình thành do:', options: [{ key: 'A', text: 'Lực hút tĩnh điện.' }, { key: 'B', text: 'Dùng chung các cặp electron.' }, { key: 'C', text: 'Nhường electron.' }, { key: 'D', text: 'Nhận electron.' }], correctAnswer: 'B', explanation: 'Liên kết cộng hóa trị không cực.' },
        { id: 'b6-q10', difficulty: 'TH', question: 'Để đạt cấu hình bền vững giống khí hiếm, nguyên tử Chlorine (Z=17) cần:', options: [{ key: 'A', text: 'Nhường 1e.' }, { key: 'B', text: 'Nhận 1e.' }, { key: 'C', text: 'Nhường 7e.' }, { key: 'D', text: 'Nhận 7e.' }], correctAnswer: 'B', explanation: 'Cl có 7e lớp ngoài cùng, cần thêm 1e để đủ 8e.' }
      ],
      essay: [
        { id: 'b6-e1', difficulty: 'VD', question: 'Trình bày sự hình thành liên kết ion trong phân tử MgO.', sampleAnswer: 'Mg nhường 2e tạo Mg2+. O nhận 2e tạo O2-. Hai ion trái dấu Mg2+ và O2- hút nhau tạo thành phân tử MgO.' },
        { id: 'b6-e2', difficulty: 'TH', question: 'Tại sao các khí hiếm thường trơ về mặt hóa học?', sampleAnswer: 'Vì chúng đã có lớp electron ngoài cùng bão hòa (8e, hoặc 2e với He), cấu hình bền vững, khó tham gia phản ứng.' }
      ]
    }
  },
  {
    id: 'bai-7',
    topic: 'PHẦN 2: CHẤT VÀ SỰ BIẾN ĐỔI',
    title: 'Bài 7: Hóa Trị Và Công Thức Hóa Học',
    colorTheme: 'from-fuchsia-500 to-pink-500',
    objectives: ['Quy tắc hóa trị', 'Lập công thức hóa học'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b7-q1', difficulty: 'NB', question: 'Hóa trị của Hydrogen (H) luôn được quy ước là:', options: [{ key: 'A', text: 'I.' }, { key: 'B', text: 'II.' }, { key: 'C', text: 'III.' }, { key: 'D', text: 'IV.' }], correctAnswer: 'A', explanation: 'Theo quy ước, H luôn có hóa trị I.' },
        { id: 'b7-q2', difficulty: 'NB', question: 'Hóa trị của Oxygen (O) thường là:', options: [{ key: 'A', text: 'I.' }, { key: 'B', text: 'II.' }, { key: 'C', text: 'III.' }, { key: 'D', text: 'IV.' }], correctAnswer: 'B', explanation: 'Theo quy ước, O thường có hóa trị II.' },
        { id: 'b7-q3', difficulty: 'NB', question: 'Công thức hóa học của nước là:', options: [{ key: 'A', text: 'HO.' }, { key: 'B', text: 'H2O.' }, { key: 'C', text: 'HO2.' }, { key: 'D', text: 'H2O2.' }], correctAnswer: 'B', explanation: 'H(I), O(II) => H2O.' },
        { id: 'b7-q4', difficulty: 'VD', question: 'Trong hợp chất CO2, Carbon (C) có hóa trị mấy?', options: [{ key: 'A', text: 'I.' }, { key: 'B', text: 'II.' }, { key: 'C', text: 'III.' }, { key: 'D', text: 'IV.' }], correctAnswer: 'D', explanation: 'O hóa trị II. 1*C = 2*II => C = IV.' },
        { id: 'b7-q5', difficulty: 'NB', question: 'Quy tắc hóa trị được phát biểu là:', options: [{ key: 'A', text: 'Tích chỉ số và hóa trị của nguyên tố này bằng tích chỉ số và hóa trị của nguyên tố kia.' }, { key: 'B', text: 'Tổng chỉ số và hóa trị bằng nhau.' }, { key: 'C', text: 'Chỉ số bằng hóa trị.' }, { key: 'D', text: 'Hóa trị bằng tổng các chỉ số.' }], correctAnswer: 'A', explanation: 'Công thức: x.a = y.b' },
        { id: 'b7-q6', difficulty: 'NB', question: 'Công thức hóa học của muối ăn là:', options: [{ key: 'A', text: 'Na.' }, { key: 'B', text: 'Cl.' }, { key: 'C', text: 'NaCl.' }, { key: 'D', text: 'NaCl2.' }], correctAnswer: 'C', explanation: 'Na(I), Cl(I) => NaCl.' },
        { id: 'b7-q7', difficulty: 'VDC', question: 'Tính phần trăm khối lượng của N trong phân bón Urea (NH2)2CO (Biết N=14, H=1, C=12, O=16):', options: [{ key: 'A', text: '23,3%.' }, { key: 'B', text: '46,7%.' }, { key: 'C', text: '35%.' }, { key: 'D', text: '60%.' }], correctAnswer: 'B', explanation: 'KLPT = (14+2)*2 + 12 + 16 = 60. %N = (2*14/60)*100% ≈ 46,7%.' },
        { id: 'b7-q8', difficulty: 'TH', question: 'Hóa trị của nhóm (SO4) trong H2SO4 là:', options: [{ key: 'A', text: 'I.' }, { key: 'B', text: 'II.' }, { key: 'C', text: 'III.' }, { key: 'D', text: 'IV.' }], correctAnswer: 'B', explanation: '2 nguyên tử H(I) liên kết với 1 nhóm SO4 => SO4 hóa trị II.' },
        { id: 'b7-q9', difficulty: 'TH', question: 'Lập công thức hóa học của hợp chất tạo bởi Al (III) và O (II):', options: [{ key: 'A', text: 'AlO.' }, { key: 'B', text: 'Al2O3.' }, { key: 'C', text: 'Al3O2.' }, { key: 'D', text: 'AlO2.' }], correctAnswer: 'B', explanation: 'Chéo hóa trị: Al(III) và O(II) => Al2O3.' },
        { id: 'b7-q10', difficulty: 'TH', question: 'Ý nghĩa của công thức hóa học CaCO3:', options: [{ key: 'A', text: 'Tạo bởi Ca, C, O.' }, { key: 'B', text: 'Tỉ lệ số nguyên tử Ca:C:O là 1:1:3.' }, { key: 'C', text: 'Phân tử khối là 100 amu.' }, { key: 'D', text: 'Cả 3 ý trên.' }], correctAnswer: 'D', explanation: 'Công thức cho biết thành phần nguyên tố, tỉ lệ số nguyên tử và khối lượng phân tử.' }
      ],
      essay: [
        { id: 'b7-e1', difficulty: 'VD', question: 'Phát biểu quy tắc hóa trị. Áp dụng tính hóa trị của S trong hợp chất SO3 (biết O hóa trị II).', sampleAnswer: 'Quy tắc: Tích chỉ số và hóa trị nguyên tố này bằng tích chỉ số và hóa trị nguyên tố kia. S có chỉ số 1, O có chỉ số 3 => 1*S = 3*II => S = VI.' },
        { id: 'b7-e2', difficulty: 'VD', question: 'Lập công thức hóa học của hợp chất tạo bởi Sắt (Fe) hóa trị III và nhóm Sulfate (SO4) hóa trị II.', sampleAnswer: 'Fe(III) và SO4(II) chéo hóa trị => Fe2(SO4)3.' }
      ]
    }
  },
  // =================================================================
  // PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI (VẬT LÝ)
  // =================================================================
  {
    id: 'bai-8',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 8: Tốc Độ Chuyển Động',
    colorTheme: 'from-blue-500 to-indigo-600',
    objectives: ['Khái niệm tốc độ', 'Công thức tính v=s/t'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b8-q1', difficulty: 'NB', question: 'Công thức tính tốc độ là:', options: [{ key: 'A', text: 'v = s.t' }, { key: 'B', text: 'v = s/t' }, { key: 'C', text: 'v = t/s' }, { key: 'D', text: 'v = s+t' }], correctAnswer: 'B', explanation: 'Tốc độ = Quãng đường / Thời gian.' },
        { id: 'b8-q2', difficulty: 'NB', question: 'Đơn vị hợp pháp của tốc độ là:', options: [{ key: 'A', text: 'm/s và km/h.' }, { key: 'B', text: 'm.s.' }, { key: 'C', text: 'km.h.' }, { key: 'D', text: 's/m.' }], correctAnswer: 'A', explanation: 'Hai đơn vị phổ biến nhất là mét trên giây và kilomet trên giờ.' },
        { id: 'b8-q3', difficulty: 'NB', question: 'Tốc độ cho biết điều gì?', options: [{ key: 'A', text: 'Hướng chuyển động.' }, { key: 'B', text: 'Quãng đường đi được.' }, { key: 'C', text: 'Sự nhanh hay chậm của chuyển động.' }, { key: 'D', text: 'Thời gian đi.' }], correctAnswer: 'C', explanation: 'Tốc độ đặc trưng cho sự nhanh, chậm của chuyển động.' },
        { id: 'b8-q4', difficulty: 'VD', question: 'Đổi 15 m/s ra km/h:', options: [{ key: 'A', text: '36 km/h.' }, { key: 'B', text: '54 km/h.' }, { key: 'C', text: '45 km/h.' }, { key: 'D', text: '150 km/h.' }], correctAnswer: 'B', explanation: '15 * 3.6 = 54 km/h.' },
        { id: 'b8-q5', difficulty: 'VD', question: 'Một vật đi hết 600m trong 1 phút. Tốc độ là:', options: [{ key: 'A', text: '600 m/s.' }, { key: 'B', text: '10 m/s.' }, { key: 'C', text: '60 m/s.' }, { key: 'D', text: '100 m/s.' }], correctAnswer: 'B', explanation: '1 phút = 60s. v = 600 / 60 = 10 m/s.' },
        { id: 'b8-q6', difficulty: 'NB', question: 'Đại lượng s trong công thức v=s/t là:', options: [{ key: 'A', text: 'Thời gian.' }, { key: 'B', text: 'Tốc độ.' }, { key: 'C', text: 'Quãng đường.' }, { key: 'D', text: 'Diện tích.' }], correctAnswer: 'C', explanation: 's là kí hiệu của quãng đường (space).' },
        { id: 'b8-q7', difficulty: 'TH', question: 'Nếu tốc độ không đổi, quãng đường tỉ lệ:', options: [{ key: 'A', text: 'Nghịch với thời gian.' }, { key: 'B', text: 'Thuận với thời gian.' }, { key: 'C', text: 'Không phụ thuộc thời gian.' }, { key: 'D', text: 'Tỉ lệ với bình phương thời gian.' }], correctAnswer: 'B', explanation: 's = v.t, v là hằng số thì s tăng khi t tăng.' },
        { id: 'b8-q8', difficulty: 'TH', question: 'Biển báo 60 vòng tròn đỏ viền đỏ nền trắng nghĩa là:', options: [{ key: 'A', text: 'Tốc độ tối thiểu 60.' }, { key: 'B', text: 'Tốc độ tối đa 60.' }, { key: 'C', text: 'Đường dài 60km.' }, { key: 'D', text: 'Cấm xe 60 tấn.' }], correctAnswer: 'B', explanation: 'Biển báo cấm vượt quá tốc độ tối đa cho phép.' },
        { id: 'b8-q9', difficulty: 'NB', question: 'Dụng cụ đo tốc độ xe máy gọi là:', options: [{ key: 'A', text: 'Tốc kế.' }, { key: 'B', text: 'Nhiệt kế.' }, { key: 'C', text: 'Vôn kế.' }, { key: 'D', text: 'Lực kế.' }], correctAnswer: 'A', explanation: 'Tốc kế (đồng hồ công tơ mét).' },
        { id: 'b8-q10', difficulty: 'TH', question: 'Bạn A đi nhanh hơn bạn B nghĩa là:', options: [{ key: 'A', text: 'Bạn A đi quãng đường dài hơn B trong cùng thời gian.' }, { key: 'B', text: 'Bạn A đi thời gian dài hơn B trên cùng quãng đường.' }, { key: 'C', text: 'Bạn A có khối lượng lớn hơn.' }, { key: 'D', text: 'Bạn A đi quãng đường ngắn hơn.' }], correctAnswer: 'A', explanation: 'Đi nhanh hơn nghĩa là đi được xa hơn trong cùng một khoảng thời gian.' }
      ],
      essay: [
        { id: 'b8-e1', difficulty: 'VD', question: 'Một học sinh đi xe đạp đều trong 10 phút đi được 1,5 km. Tính tốc độ ra m/s và km/h.', sampleAnswer: 'Đổi t=10p=600s; s=1,5km=1500m. v = 1500/600 = 2,5 m/s. Đổi ra km/h: 2,5 * 3,6 = 9 km/h.' },
        { id: 'b8-e2', difficulty: 'VD', question: 'Một ca nô chạy trên sông với tốc độ 25 km/h. Tính thời gian để ca nô đi được 90 km.', sampleAnswer: 't = s/v = 90/25 = 3,6 giờ (hoặc 3 giờ 36 phút).' }
      ]
    }
  },
  {
    id: 'bai-9',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 9: Đo Tốc Độ',
    colorTheme: 'from-indigo-600 to-violet-600',
    objectives: ['Dụng cụ đo tốc độ', 'Đồng hồ bấm giây', 'Cổng quang điện'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b9-q1', difficulty: 'NB', question: 'Dụng cụ nào dùng để đo tốc độ trong phòng thực hành?', options: [{ key: 'A', text: 'Đồng hồ bấm giây và thước.' }, { key: 'B', text: 'Cổng quang điện và đồng hồ hiện số.' }, { key: 'C', text: 'Tốc kế.' }, { key: 'D', text: 'Cả A và B.' }], correctAnswer: 'D', explanation: 'Cả 2 phương pháp đều được sử dụng tùy theo mục đích và điều kiện.' },
        { id: 'b9-q2', difficulty: 'TH', question: 'Ưu điểm của cổng quang điện so với đồng hồ bấm giây là:', options: [{ key: 'A', text: 'Rẻ tiền hơn.' }, { key: 'B', text: 'Đo chính xác hơn với chuyển động nhanh.' }, { key: 'C', text: 'Dễ sử dụng hơn.' }, { key: 'D', text: 'Đo được quãng đường dài hơn.' }], correctAnswer: 'B', explanation: 'Giúp loại bỏ sai số do phản xạ của người bấm, đặc biệt với vật chuyển động nhanh.' },
        { id: 'b9-q3', difficulty: 'TH', question: 'Để đo tốc độ bằng đồng hồ bấm giây, ta cần đo:', options: [{ key: 'A', text: 'Quãng đường và thời gian.' }, { key: 'B', text: 'Chỉ thời gian.' }, { key: 'C', text: 'Chỉ quãng đường.' }, { key: 'D', text: 'Gia tốc.' }], correctAnswer: 'A', explanation: 'Cần s và t để tính v=s/t.' },
        { id: 'b9-q4', difficulty: 'NB', question: 'Cổng quang điện hoạt động dựa trên nguyên tắc:', options: [{ key: 'A', text: 'Cảm biến nhiệt.' }, { key: 'B', text: 'Cảm biến ánh sáng (hồng ngoại).' }, { key: 'C', text: 'Cảm biến âm thanh.' }, { key: 'D', text: 'Cảm biến lực.' }], correctAnswer: 'B', explanation: 'Sử dụng tia hồng ngoại bị chắn để đóng/ngắt mạch đo thời gian.' },
        { id: 'b9-q5', difficulty: 'NB', question: 'Máy "bắn tốc độ" của cảnh sát giao thông dùng để:', options: [{ key: 'A', text: 'Đo thời gian xe chạy.' }, { key: 'B', text: 'Đo trực tiếp tốc độ xe đang chạy.' }, { key: 'C', text: 'Đo khối lượng xe.' }, { key: 'D', text: 'Đo quãng đường xe chạy.' }], correctAnswer: 'B', explanation: 'Máy đo trực tiếp tốc độ tức thời của xe.' },
        { id: 'b9-q6', difficulty: 'TH', question: 'Khi dùng đồng hồ hiện số và cổng quang, chế độ A <-> B dùng để:', options: [{ key: 'A', text: 'Đo thời gian vật chắn cổng A.' }, { key: 'B', text: 'Đo thời gian vật đi từ A đến B.' }, { key: 'C', text: 'Đo thời gian vật chắn cổng B.' }, { key: 'D', text: 'Reset đồng hồ.' }], correctAnswer: 'B', explanation: 'Đo khoảng thời gian vật chuyển động giữa 2 cổng quang A và B.' },
        { id: 'b9-q7', difficulty: 'NB', question: 'Thiết bị bắn tốc độ thường sử dụng sóng gì?', options: [{ key: 'A', text: 'Sóng âm.' }, { key: 'B', text: 'Sóng ánh sáng hoặc sóng vô tuyến (radar).' }, { key: 'C', text: 'Sóng biển.' }, { key: 'D', text: 'Sóng cơ.' }], correctAnswer: 'B', explanation: 'Thường dùng sóng vô tuyến (radar) hoặc tia laser (ánh sáng).' },
        { id: 'b9-q8', difficulty: 'TH', question: 'Sai số khi đo tốc độ bằng đồng hồ bấm giây chủ yếu do:', options: [{ key: 'A', text: 'Thước đo không chuẩn.' }, { key: 'B', text: 'Phản xạ của người bấm nhanh hay chậm.' }, { key: 'C', text: 'Đồng hồ chạy sai.' }, { key: 'D', text: 'Gió thổi.' }], correctAnswer: 'B', explanation: 'Yếu tố con người (thời gian phản xạ) gây sai số lớn nhất.' },
        { id: 'b9-q9', difficulty: 'VD', question: 'Để đo tốc độ bơi của một người, dụng cụ thích hợp nhất là:', options: [{ key: 'A', text: 'Cổng quang điện.' }, { key: 'B', text: 'Đồng hồ bấm giây và thước dây.' }, { key: 'C', text: 'Tốc kế xe máy.' }, { key: 'D', text: 'Radar.' }], correctAnswer: 'B', explanation: 'Phù hợp với tốc độ chậm và môi trường bể bơi lớn.' },
        { id: 'b9-q10', difficulty: 'NB', question: 'Trên đồng hồ hiện số, nút RESET dùng để:', options: [{ key: 'A', text: 'Tắt máy.' }, { key: 'B', text: 'Đưa số chỉ về 0.' }, { key: 'C', text: 'Chuyển chế độ đo.' }, { key: 'D', text: 'Giữ số liệu.' }], correctAnswer: 'B', explanation: 'Xóa dữ liệu cũ để thực hiện lần đo mới.' }
      ],
      essay: [
        { id: 'b9-e1', difficulty: 'TH', question: 'Mô tả các bước đo tốc độ dùng đồng hồ bấm giây.', sampleAnswer: '(1) Đo độ dài quãng đường s. (2) Dùng đồng hồ đo thời gian t vật đi hết s. (3) Tính v = s/t.' },
        { id: 'b9-e2', difficulty: 'TH', question: 'Tại sao khi đo tốc độ của viên bi lăn nhanh trên máng nghiêng, người ta ưu tiên dùng cổng quang điện hơn đồng hồ bấm giây?', sampleAnswer: 'Vì viên bi chuyển động nhanh, thời gian trôi qua rất ngắn. Phản xạ tay người bấm đồng hồ sẽ gây sai số lớn. Cổng quang tự động ngắt/mở đồng hồ nên chính xác hơn.' }
      ]
    }
  },
  {
    id: 'bai-10',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 10: Đồ Thị Quãng Đường - Thời Gian',
    colorTheme: 'from-violet-500 to-fuchsia-500',
    objectives: ['Vẽ đồ thị s-t', 'Đọc đồ thị s-t'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b10-q1', difficulty: 'NB', question: 'Đồ thị quãng đường – thời gian có trục tung và trục hoành biểu diễn đại lượng nào?', options: [{ key: 'A', text: 'Trục tung: thời gian (t), trục hoành: quãng đường (s).' }, { key: 'B', text: 'Trục tung: quãng đường (s), trục hoành: thời gian (t).' }, { key: 'C', text: 'Cả hai trục đều là quãng đường.' }, { key: 'D', text: 'Trục tung: tốc độ (v), trục hoành: thời gian (t).' }], correctAnswer: 'B', explanation: 'Quy ước: Trục thẳng đứng (tung) là s, trục nằm ngang (hoành) là t.' },
        { id: 'b10-q2', difficulty: 'NB', question: 'Đồ thị s-t là đường thẳng đi qua gốc tọa độ cho biết:', options: [{ key: 'A', text: 'Vật chuyển động đều.' }, { key: 'B', text: 'Vật đứng yên.' }, { key: 'C', text: 'Vật chuyển động nhanh dần.' }, { key: 'D', text: 'Vật chuyển động chậm dần.' }], correctAnswer: 'A', explanation: 'Quãng đường tỉ lệ thuận với thời gian => tốc độ không đổi (chuyển động đều).' },
        { id: 'b10-q3', difficulty: 'TH', question: 'Đường biểu diễn nằm ngang song song với trục thời gian trên đồ thị s-t nghĩa là:', options: [{ key: 'A', text: 'Vật đang đi rất nhanh.' }, { key: 'B', text: 'Vật đang đứng yên.' }, { key: 'C', text: 'Vật đang quay về.' }, { key: 'D', text: 'Vật đang giảm tốc.' }], correctAnswer: 'B', explanation: 'Quãng đường s không đổi theo thời gian t => vật đứng yên.' },
        { id: 'b10-q4', difficulty: 'NB', question: 'Từ đồ thị s-t, ta có thể xác định được:', options: [{ key: 'A', text: 'Quãng đường đi được.' }, { key: 'B', text: 'Thời gian đi.' }, { key: 'C', text: 'Tốc độ của vật.' }, { key: 'D', text: 'Cả 3 ý trên.' }], correctAnswer: 'D', explanation: 's và t đọc trực tiếp trên trục, v tính bằng s/t.' },
        { id: 'b10-q5', difficulty: 'TH', question: 'Đồ thị càng dốc đứng (hệ số góc lớn) chứng tỏ:', options: [{ key: 'A', text: 'Tốc độ càng lớn.' }, { key: 'B', text: 'Tốc độ càng nhỏ.' }, { key: 'C', text: 'Vật đang đứng yên.' }, { key: 'D', text: 'Thời gian đi càng dài.' }], correctAnswer: 'A', explanation: 'Cùng một thời gian, vật đi được quãng đường dài hơn => nhanh hơn.' },
        { id: 'b10-q6', difficulty: 'NB', question: 'Để vẽ đồ thị, bước đầu tiên là:', options: [{ key: 'A', text: 'Nối các điểm.' }, { key: 'B', text: 'Lập bảng ghi quãng đường và thời gian.' }, { key: 'C', text: 'Tính tốc độ.' }, { key: 'D', text: 'Kết luận.' }], correctAnswer: 'B', explanation: 'Cần có bảng số liệu mới xác định được các điểm để vẽ.' },
        { id: 'b10-q7', difficulty: 'TH', question: 'Nếu đồ thị là đường cong, chuyển động đó là:', options: [{ key: 'A', text: 'Thẳng đều.' }, { key: 'B', text: 'Không đều.' }, { key: 'C', text: 'Đứng yên.' }, { key: 'D', text: 'Không xác định.' }], correctAnswer: 'B', explanation: 'Tốc độ thay đổi theo thời gian.' },
        { id: 'b10-q8', difficulty: 'NB', question: 'Trong đồ thị s-t, gốc tọa độ O thường biểu thị:', options: [{ key: 'A', text: 's=0, t=0.' }, { key: 'B', text: 's=10, t=0.' }, { key: 'C', text: 's=0, t=10.' }, { key: 'D', text: 'Đích đến.' }], correctAnswer: 'A', explanation: 'Điểm xuất phát về thời gian và không gian.' },
        { id: 'b10-q9', difficulty: 'TH', question: 'Hai xe có đồ thị s-t cắt nhau tại một điểm. Điểm đó cho biết:', options: [{ key: 'A', text: 'Hai xe dừng lại.' }, { key: 'B', text: 'Hai xe gặp nhau.' }, { key: 'C', text: 'Hai xe có cùng tốc độ.' }, { key: 'D', text: 'Hai xe xuất phát cùng lúc.' }], correctAnswer: 'B', explanation: 'Tại đó tọa độ s và thời điểm t của 2 xe trùng nhau.' },
        { id: 'b10-q10', difficulty: 'NB', question: 'Không thể tính tốc độ nếu chỉ biết:', options: [{ key: 'A', text: 'Đồ thị s-t.' }, { key: 'B', text: 'Quãng đường và thời gian.' }, { key: 'C', text: 'Chỉ quãng đường.' }, { key: 'D', text: 'Bảng số liệu s, t.' }], correctAnswer: 'C', explanation: 'Thiếu thời gian thì không tính được tốc độ.' }
      ],
      essay: [
        { id: 'b10-e1', difficulty: 'TH', question: 'Dựa vào đồ thị quãng đường - thời gian của một vật, làm thế nào để biết vật đó chuyển động nhanh hay chậm?', sampleAnswer: 'So sánh độ dốc của đồ thị. Đường nào dốc hơn (nghiêng nhiều hơn về trục s) thì vật chuyển động nhanh hơn. Hoặc tính v=s/t từ tọa độ điểm.' },
        { id: 'b10-e2', difficulty: 'VD', question: 'Một vật chuyển động có đồ thị là đường thẳng đi qua gốc tọa độ. Tại thời điểm t=2s, vật ở vị trí s=10m. Tính tốc độ của vật.', sampleAnswer: 'v = s/t = 10/2 = 5 m/s.' }
      ]
    }
  },
  {
    id: 'bai-11',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 11: An Toàn Giao Thông',
    colorTheme: 'from-red-500 to-rose-600',
    objectives: ['Quy tắc 3 giây', 'Khoảng cách an toàn', 'Biển báo'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b11-q1', difficulty: 'NB', question: 'Nguyên nhân chủ yếu gây tai nạn giao thông là:', options: [{ key: 'A', text: 'Đi đúng làn đường.' }, { key: 'B', text: 'Tuân thủ đèn tín hiệu.' }, { key: 'C', text: 'Phóng nhanh, vượt ẩu, quá tốc độ.' }, { key: 'D', text: 'Đi bộ trên vỉa hè.' }], correctAnswer: 'C', explanation: 'Vi phạm tốc độ là nguyên nhân hàng đầu.' },
        { id: 'b11-q2', difficulty: 'NB', question: 'Quy tắc "3 giây" dùng để:', options: [{ key: 'A', text: 'Tính tốc độ xe.' }, { key: 'B', text: 'Xác định khoảng cách an toàn với xe trước.' }, { key: 'C', text: 'Đo thời gian vượt xe.' }, { key: 'D', text: 'Đếm ngược đèn đỏ.' }], correctAnswer: 'B', explanation: 'Giúp tài xế giữ khoảng cách đủ để xử lý tình huống.' },
        { id: 'b11-q3', difficulty: 'TH', question: 'Khi trời mưa, đường trơn, người lái xe cần:', options: [{ key: 'A', text: 'Tăng tốc độ.' }, { key: 'B', text: 'Giữ nguyên tốc độ.' }, { key: 'C', text: 'Giảm tốc độ và tăng khoảng cách an toàn.' }, { key: 'D', text: 'Phanh gấp liên tục.' }], correctAnswer: 'C', explanation: 'Do ma sát giảm, xe dễ trượt nên cần đi chậm và giữ khoảng cách xa hơn.' },
        { id: 'b11-q4', difficulty: 'TH', question: 'Khoảng cách an toàn tối thiểu phụ thuộc vào:', options: [{ key: 'A', text: 'Tốc độ lưu hành.' }, { key: 'B', text: 'Loại xe.' }, { key: 'C', text: 'Màu xe.' }, { key: 'D', text: 'Số người trên xe.' }], correctAnswer: 'A', explanation: 'Tốc độ càng cao, khoảng cách an toàn càng lớn để kịp phanh.' },
        { id: 'b11-q5', difficulty: 'TH', question: 'Biển báo tốc độ tối đa cho phép 60km/h thường cắm ở đâu?', options: [{ key: 'A', text: 'Đường cao tốc.' }, { key: 'B', text: 'Khu dân cư đông đúc.' }, { key: 'C', text: 'Đường đất.' }, { key: 'D', text: 'Đường đua.' }], correctAnswer: 'B', explanation: 'Hạn chế tốc độ nơi đông người để đảm bảo an toàn.' },
        { id: 'b11-q6', difficulty: 'NB', question: 'Thiết bị nào giúp cảnh sát phát hiện xe vi phạm tốc độ?', options: [{ key: 'A', text: 'Camera ghi hình.' }, { key: 'B', text: 'Súng bắn tốc độ.' }, { key: 'C', text: 'Cả A và B.' }, { key: 'D', text: 'Ống nhòm.' }], correctAnswer: 'C', explanation: 'Cảnh sát dùng súng bắn tốc độ (có camera ghi hình) để xử lý vi phạm.' },
        { id: 'b11-q7', difficulty: 'TH', question: 'Tốc độ ảnh hưởng thế nào đến quán tính?', options: [{ key: 'A', text: 'Tốc độ càng cao, quán tính càng lớn, khó dừng lại.' }, { key: 'B', text: 'Tốc độ càng cao, dễ dừng lại.' }, { key: 'C', text: 'Tốc độ không ảnh hưởng quán tính.' }, { key: 'D', text: 'Tốc độ cao làm giảm quán tính.' }], correctAnswer: 'A', explanation: 'Xe chạy nhanh khó dừng ngay do quán tính lớn.' },
        { id: 'b11-q8', difficulty: 'VD', question: 'Công thức tính khoảng cách an toàn theo quy tắc 3 giây:', options: [{ key: 'A', text: 's = v x 3.' }, { key: 'B', text: 's = v/3.' }, { key: 'C', text: 's = 3/v.' }, { key: 'D', text: 's = v + 3.' }], correctAnswer: 'A', explanation: 'Quãng đường đi được trong 3 giây (s = v.t).' },
        { id: 'b11-q9', difficulty: 'TH', question: 'Tại sao có biển báo tốc độ khác nhau ở các làn đường?', options: [{ key: 'A', text: 'Để trang trí.' }, { key: 'B', text: 'Phù hợp với từng loại xe và điều kiện đường.' }, { key: 'C', text: 'Làm khó người lái xe.' }, { key: 'D', text: 'Do thừa biển báo.' }], correctAnswer: 'B', explanation: 'Xe tải, xe con, xe máy có khả năng vận hành và an toàn khác nhau.' },
        { id: 'b11-q10', difficulty: 'NB', question: 'Hậu quả của việc không tuân thủ tốc độ là:', options: [{ key: 'A', text: 'Tiết kiệm xăng.' }, { key: 'B', text: 'Đến nơi sớm hơn.' }, { key: 'C', text: 'Gây tai nạn cho mình và người khác.' }, { key: 'D', text: 'Được khen ngợi.' }], correctAnswer: 'C', explanation: 'Nguy cơ tai nạn cao, thiệt hại về người và của.' }
      ],
      essay: [
        { id: 'b11-e1', difficulty: 'TH', question: 'Giải thích quy tắc "3 giây" trong an toàn giao thông.', sampleAnswer: 'Là khoảng thời gian cần thiết để tài xế phản xạ và phanh xe dừng lại an toàn. Khoảng cách an toàn (m) ≈ Tốc độ (m/s) × 3.' },
        { id: 'b11-e2', difficulty: 'VD', question: 'Tại sao ở những đoạn đường quanh co, đèo dốc thường có biển báo giảm tốc độ?', sampleAnswer: 'Để giảm lực quán tính li tâm, tránh bị văng ra khỏi đường và giúp tài xế kịp xử lý tình huống khuất tầm nhìn.' }
      ]
    }
  },
  {
    id: 'bai-12',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 12: Sóng Âm',
    colorTheme: 'from-orange-400 to-red-400',
    objectives: ['Nguồn âm', 'Sóng âm', 'Môi trường truyền âm'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b12-q1', difficulty: 'NB', question: 'Sóng âm là gì?', options: [{ key: 'A', text: 'Sự lan truyền ánh sáng.' }, { key: 'B', text: 'Sự lan truyền dao động của nguồn âm trong môi trường.' }, { key: 'C', text: 'Dòng chuyển dời của các hạt mang điện.' }, { key: 'D', text: 'Sự chuyển động của gió.' }], correctAnswer: 'B', explanation: 'Sóng âm là sự lan truyền dao động từ nguồn âm ra môi trường xung quanh.' },
        { id: 'b12-q2', difficulty: 'NB', question: 'Vật phát ra âm thanh được gọi là:', options: [{ key: 'A', text: 'Nguồn âm.' }, { key: 'B', text: 'Vật phản xạ âm.' }, { key: 'C', text: 'Màn chắn âm.' }, { key: 'D', text: 'Máy thu âm.' }], correctAnswer: 'A', explanation: 'Nguồn âm là vật dao động phát ra âm.' },
        { id: 'b12-q3', difficulty: 'TH', question: 'Âm thanh KHÔNG thể truyền trong môi trường nào?', options: [{ key: 'A', text: 'Chất rắn.' }, { key: 'B', text: 'Chất lỏng.' }, { key: 'C', text: 'Chất khí.' }, { key: 'D', text: 'Chân không.' }], correctAnswer: 'D', explanation: 'Sóng âm cần môi trường vật chất để lan truyền, chân không không có hạt vật chất nên không truyền âm.' },
        { id: 'b12-q4', difficulty: 'NB', question: 'Khi gảy đàn guitar, bộ phận nào dao động phát ra âm?', options: [{ key: 'A', text: 'Thùng đàn.' }, { key: 'B', text: 'Dây đàn.' }, { key: 'C', text: 'Cần đàn.' }, { key: 'D', text: 'Phím đàn.' }], correctAnswer: 'B', explanation: 'Dây đàn dao động tạo ra âm thanh.' },
        { id: 'b12-q5', difficulty: 'TH', question: 'Tốc độ truyền âm trong các môi trường sắp xếp theo thứ tự giảm dần là:', options: [{ key: 'A', text: 'Rắn > Lỏng > Khí.' }, { key: 'B', text: 'Khí > Lỏng > Rắn.' }, { key: 'C', text: 'Lỏng > Rắn > Khí.' }, { key: 'D', text: 'Rắn > Khí > Lỏng.' }], correctAnswer: 'A', explanation: 'Mật độ vật chất càng lớn, âm truyền càng nhanh (Rắn > Lỏng > Khí).' },
        { id: 'b12-q6', difficulty: 'VD', question: 'Tại sao áp tai xuống đường ray xe lửa lại nghe thấy tiếng tàu chạy từ xa sớm hơn nghe trong không khí?', options: [{ key: 'A', text: 'Vì sắt truyền âm tốt hơn không khí.' }, { key: 'B', text: 'Vì không khí cản âm.' }, { key: 'C', text: 'Vì tai nhạy cảm hơn khi áp xuống đất.' }, { key: 'D', text: 'Vì tàu chạy rất nhanh.' }], correctAnswer: 'A', explanation: 'Tốc độ truyền âm trong chất rắn (đường ray) lớn hơn trong chất khí.' },
        { id: 'b12-q7', difficulty: 'NB', question: 'Đặc điểm chung của các nguồn âm là:', options: [{ key: 'A', text: 'Đều phát sáng.' }, { key: 'B', text: 'Đều dao động.' }, { key: 'C', text: 'Đều đứng yên.' }, { key: 'D', text: 'Đều nóng lên.' }], correctAnswer: 'B', explanation: 'Mọi vật phát ra âm đều dao động.' },
        { id: 'b12-q8', difficulty: 'TH', question: 'Hành động nào sau đây tạo ra nguồn âm?', options: [{ key: 'A', text: 'Cầm chiếc thước kẻ.' }, { key: 'B', text: 'Gảy dây đàn.' }, { key: 'C', text: 'Nhìn vào tờ giấy.' }, { key: 'D', text: 'Đặt tay lên mặt bàn.' }], correctAnswer: 'B', explanation: 'Gảy dây đàn làm dây dao động phát ra âm.' },
        { id: 'b12-q9', difficulty: 'TH', question: 'Trong thí nghiệm với trống, khi gõ mạnh vào mặt trống thì:', options: [{ key: 'A', text: 'Mặt trống dao động.' }, { key: 'B', text: 'Mặt trống đứng yên.' }, { key: 'C', text: 'Không khí đứng yên.' }, { key: 'D', text: 'Mặt trống phát sáng.' }], correctAnswer: 'A', explanation: 'Dao động của mặt trống là nguồn âm.' },
        { id: 'b12-q10', difficulty: 'NB', question: 'Âm thanh truyền đến tai ta qua môi trường nào chủ yếu?', options: [{ key: 'A', text: 'Nước.' }, { key: 'B', text: 'Không khí.' }, { key: 'C', text: 'Gỗ.' }, { key: 'D', text: 'Kim loại.' }], correctAnswer: 'B', explanation: 'Trong đời sống hàng ngày, ta nghe được nhờ âm truyền qua không khí.' }
      ],
      essay: [
        { id: 'b12-e1', difficulty: 'VD', question: 'Giải thích tại sao trong các phim khoa học viễn tưởng, các chiến binh vũ trụ mặc áo giáp nhưng vẫn phải dùng thiết bị liên lạc vô tuyến để nói chuyện với nhau dù đứng rất gần?', sampleAnswer: 'Vì trong vũ trụ là môi trường chân không, sóng âm không thể truyền qua được. Các thiết bị vô tuyến sử dụng sóng điện từ có thể truyền trong chân không.' },
        { id: 'b12-e2', difficulty: 'TH', question: 'Mô tả thí nghiệm chứng minh âm truyền được trong chất lỏng.', sampleAnswer: 'Đặt một nguồn âm (như đồng hồ báo thức đang kêu) vào trong túi ni lông kín rồi thả vào bể nước. Ghé tai sát thành bể hoặc nhúng tai xuống nước (có bảo hộ) vẫn nghe thấy tiếng chuông → Âm truyền được trong nước.' }
      ]
    }
  },
  {
    id: 'bai-13',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 13: Độ Cao Và Độ To Của Âm',
    colorTheme: 'from-amber-500 to-orange-500',
    objectives: ['Tần số', 'Biên độ', 'Độ cao, độ to', 'Hạ âm, Siêu âm'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b13-q1', difficulty: 'NB', question: 'Độ to của âm phụ thuộc vào yếu tố nào?', options: [{ key: 'A', text: 'Tần số dao động.' }, { key: 'B', text: 'Biên độ dao động.' }, { key: 'C', text: 'Thời gian dao động.' }, { key: 'D', text: 'Môi trường truyền âm.' }], correctAnswer: 'B', explanation: 'Biên độ càng lớn, âm càng to.' },
        { id: 'b13-q2', difficulty: 'NB', question: 'Độ cao của âm phụ thuộc vào yếu tố nào?', options: [{ key: 'A', text: 'Biên độ dao động.' }, { key: 'B', text: 'Tần số dao động.' }, { key: 'C', text: 'Độ đàn hồi của vật.' }, { key: 'D', text: 'Kích thước vật.' }], correctAnswer: 'B', explanation: 'Tần số càng lớn, âm càng cao (bổng).' },
        { id: 'b13-q3', difficulty: 'NB', question: 'Đơn vị đo độ to của âm là:', options: [{ key: 'A', text: 'Hz (Hertz).' }, { key: 'B', text: 'dB (Decibel).' }, { key: 'C', text: 'm/s.' }, { key: 'D', text: 'N (Newton).' }], correctAnswer: 'B', explanation: 'Độ to đo bằng dB.' },
        { id: 'b13-q4', difficulty: 'NB', question: 'Đơn vị đo tần số là:', options: [{ key: 'A', text: 'Hz.' }, { key: 'B', text: 'dB.' }, { key: 'C', text: 's.' }, { key: 'D', text: 'm.' }], correctAnswer: 'A', explanation: 'Tần số đo bằng Hertz (Hz).' },
        { id: 'b13-q5', difficulty: 'TH', question: 'Vật dao động càng nhanh thì:', options: [{ key: 'A', text: 'Tần số càng nhỏ, âm càng trầm.' }, { key: 'B', text: 'Tần số càng lớn, âm càng bổng.' }, { key: 'C', text: 'Tần số càng nhỏ, âm càng bổng.' }, { key: 'D', text: 'Tần số càng lớn, âm càng trầm.' }], correctAnswer: 'B', explanation: 'Dao động nhanh → tần số lớn → âm cao (bổng).' },
        { id: 'b13-q6', difficulty: 'NB', question: 'Biên độ dao động là gì?', options: [{ key: 'A', text: 'Số dao động trong 1 giây.' }, { key: 'B', text: 'Khoảng cách lệch lớn nhất của vật so với vị trí cân bằng.' }, { key: 'C', text: 'Tốc độ truyền âm.' }, { key: 'D', text: 'Độ dài của dây đàn.' }], correctAnswer: 'B', explanation: 'Định nghĩa biên độ.' },
        { id: 'b13-q7', difficulty: 'TH', question: 'Khi gõ mạnh vào mặt trống, tiếng trống to hơn vì:', options: [{ key: 'A', text: 'Tần số dao động lớn hơn.' }, { key: 'B', text: 'Biên độ dao động lớn hơn.' }, { key: 'C', text: 'Thời gian dao động lâu hơn.' }, { key: 'D', text: 'Mặt trống căng hơn.' }], correctAnswer: 'B', explanation: 'Gõ mạnh làm mặt trống lệch nhiều → biên độ lớn → âm to.' },
        { id: 'b13-q8', difficulty: 'NB', question: 'Tai người bình thường nghe được âm có tần số trong khoảng:', options: [{ key: 'A', text: 'Dưới 20 Hz.' }, { key: 'B', text: 'Từ 20 Hz đến 20.000 Hz.' }, { key: 'C', text: 'Trên 20.000 Hz.' }, { key: 'D', text: 'Từ 200 Hz đến 2000 Hz.' }], correctAnswer: 'B', explanation: 'Ngưỡng nghe của tai người.' },
        { id: 'b13-q9', difficulty: 'NB', question: 'Hạ âm là âm có tần số:', options: [{ key: 'A', text: 'Nhỏ hơn 20 Hz.' }, { key: 'B', text: 'Lớn hơn 20.000 Hz.' }, { key: 'C', text: 'Bằng 0 Hz.' }, { key: 'D', text: 'Từ 20 Hz đến 20.000 Hz.' }], correctAnswer: 'A', explanation: 'Âm < 20Hz gọi là hạ âm.' },
        { id: 'b13-q10', difficulty: 'NB', question: 'Siêu âm là âm có tần số:', options: [{ key: 'A', text: 'Nhỏ hơn 20 Hz.' }, { key: 'B', text: 'Lớn hơn 20.000 Hz.' }, { key: 'C', text: 'Rất nhỏ.' }, { key: 'D', text: 'Nghe rất to.' }], correctAnswer: 'B', explanation: 'Âm > 20.000Hz gọi là siêu âm.' }
      ],
      essay: [
        { id: 'b13-e1', difficulty: 'VD', question: 'Một con muỗi vỗ cánh 3000 lần trong 5 giây. Tính tần số dao động của cánh muỗi. Âm do muỗi phát ra có nghe được không?', sampleAnswer: 'Tần số f = Số dao động / thời gian = 3000 / 5 = 600 Hz. Vì 600 Hz nằm trong khoảng 20-20.000 Hz nên tai người nghe được (tiếng vo ve).' },
        { id: 'b13-e2', difficulty: 'TH', question: 'Tại sao giọng của các bạn nam thường trầm (thấp) hơn giọng của các bạn nữ?', sampleAnswer: 'Do dây thanh quản của nam thường dày và dài hơn nên khi dao động có tần số thấp hơn → âm trầm hơn. Nữ có dây thanh quản mỏng, ngắn → dao động nhanh hơn → tần số lớn → âm bổng.' }
      ]
    }
  },
  {
    id: 'bai-14',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 14: Phản Xạ Âm - Chống Ô Nhiễm Tiếng Ồn',
    colorTheme: 'from-lime-500 to-green-500',
    objectives: ['Phản xạ âm', 'Tiếng vang', 'Vật liệu cách âm', 'Chống ô nhiễm tiếng ồn'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b14-q1', difficulty: 'NB', question: 'Tiếng vang là gì?', options: [{ key: 'A', text: 'Âm thanh nghe rất to.' }, { key: 'B', text: 'Âm phản xạ nghe được cách âm trực tiếp ít nhất 1/15 giây.' }, { key: 'C', text: 'Âm thanh bị vật cản hấp thụ.' }, { key: 'D', text: 'Âm thanh truyền đi rất xa.' }], correctAnswer: 'B', explanation: 'Định nghĩa tiếng vang.' },
        { id: 'b14-q2', difficulty: 'TH', question: 'Vật liệu nào sau đây phản xạ âm tốt?', options: [{ key: 'A', text: 'Miếng xốp.' }, { key: 'B', text: 'Rèm nhung.' }, { key: 'C', text: 'Mặt gương, mặt đá hoa.' }, { key: 'D', text: 'Đệm mút.' }], correctAnswer: 'C', explanation: 'Vật cứng, nhẵn phản xạ âm tốt.' },
        { id: 'b14-q3', difficulty: 'TH', question: 'Vật liệu nào sau đây hấp thụ âm tốt (phản xạ âm kém)?', options: [{ key: 'A', text: 'Bê tông.' }, { key: 'B', text: 'Kính cửa sổ.' }, { key: 'C', text: 'Thép.' }, { key: 'D', text: 'Rèm vải dày, xốp.' }], correctAnswer: 'D', explanation: 'Vật mềm, xốp hấp thụ âm tốt.' },
        { id: 'b14-q4', difficulty: 'NB', question: 'Ô nhiễm tiếng ồn xảy ra khi:', options: [{ key: 'A', text: 'Tiếng ồn to, kéo dài ảnh hưởng đến sức khỏe và hoạt động.' }, { key: 'B', text: 'Có tiếng chim hót vào buổi sáng.' }, { key: 'C', text: 'Tiếng nhạc nhẹ trong quán cà phê.' }, { key: 'D', text: 'Tiếng cô giáo giảng bài.' }], correctAnswer: 'A', explanation: 'Định nghĩa ô nhiễm tiếng ồn.' },
        { id: 'b14-q5', difficulty: 'TH', question: 'Để chống ô nhiễm tiếng ồn ở đô thị, người ta thường:', options: [{ key: 'A', text: 'Chặt hết cây xanh.' }, { key: 'B', text: 'Trồng nhiều cây xanh để phân tán âm.' }, { key: 'C', text: 'Cấm xe đi lại hoàn toàn.' }, { key: 'D', text: 'Dùng còi xe thật to.' }], correctAnswer: 'B', explanation: 'Cây xanh giúp phân tán và hấp thụ âm thanh.' },
        { id: 'b14-q6', difficulty: 'TH', question: 'Biện pháp nào sau đây KHÔNG giúp giảm tiếng ồn?', options: [{ key: 'A', text: 'Treo biển "Đi nhẹ nói khẽ".' }, { key: 'B', text: 'Xây tường cách âm.' }, { key: 'C', text: 'Tăng độ to của loa phát thanh.' }, { key: 'D', text: 'Đóng cửa sổ.' }], correctAnswer: 'C', explanation: 'Tăng độ to loa làm tăng tiếng ồn.' },
        { id: 'b14-q7', difficulty: 'VD', question: 'Người ta thường dùng sự phản xạ của siêu âm để:', options: [{ key: 'A', text: 'Đo độ sâu của biển.' }, { key: 'B', text: 'Đo nhiệt độ nước biển.' }, { key: 'C', text: 'Đo độ mặn của biển.' }, { key: 'D', text: 'Đo độ trong của nước.' }], correctAnswer: 'A', explanation: 'Dùng máy đo sonar phát siêu âm và thu âm phản xạ để tính độ sâu.' },
        { id: 'b14-q8', difficulty: 'TH', question: 'Tại sao trong phòng thu âm, tường thường được ốp mút trứng gà (bề mặt lồi lõm)?', options: [{ key: 'A', text: 'Để trang trí cho đẹp.' }, { key: 'B', text: 'Để phản xạ âm tốt hơn.' }, { key: 'C', text: 'Để hấp thụ âm, giảm tiếng vang.' }, { key: 'D', text: 'Để tăng độ to của âm.' }], correctAnswer: 'C', explanation: 'Bề mặt gồ ghề, xốp giúp hấp thụ âm, tránh tiếng vang gây nhiễu.' },
        { id: 'b14-q9', difficulty: 'TH', question: 'Trường hợp nào sau đây có tiếng ồn gây ô nhiễm?', options: [{ key: 'A', text: 'Tiếng sấm sét trong cơn dông.' }, { key: 'B', text: 'Tiếng máy khoan bê tông hoạt động liên tục cạnh trường học.' }, { key: 'C', text: 'Tiếng hát của ca sĩ trên tivi.' }, { key: 'D', text: 'Tiếng sóng biển rì rào.' }], correctAnswer: 'B', explanation: 'Tiếng máy khoan to, kéo dài, ảnh hưởng việc học.' },
        { id: 'b14-q10', difficulty: 'VD', question: 'Khoảng cách ngắn nhất từ người nói đến bức tường để nghe được tiếng vang là:', options: [{ key: 'A', text: '11,35 m.' }, { key: 'B', text: '340 m.' }, { key: 'C', text: '15 m.' }, { key: 'D', text: '100 m.' }], correctAnswer: 'A', explanation: 's = v.t/2 = 340 * (1/15) / 2 ≈ 11,3 m.' }
      ],
      essay: [
        { id: 'b14-e1', difficulty: 'TH', question: 'Tại sao tường của các rạp hát, phòng hòa nhạc thường được làm sần sùi hoặc treo rèm nhung?', sampleAnswer: 'Để hấp thụ âm tốt, giảm sự phản xạ âm, tránh tạo ra tiếng vang làm nhòe âm thanh, giúp khán giả nghe rõ hơn.' },
        { id: 'b14-e2', difficulty: 'VD', question: 'Một người đứng cách vách núi hét lớn và nghe thấy tiếng vang sau 1 giây. Tính khoảng cách từ người đó đến vách núi. Biết tốc độ âm trong không khí là 340 m/s.', sampleAnswer: 'Thời gian âm đi đến vách núi là t = 1/2 = 0,5 s. Khoảng cách s = v.t = 340 * 0,5 = 170 m.' }
      ]
    }
  },
  {
    id: 'bai-15',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 15: Năng Lượng Ánh Sáng - Tia Sáng, Vùng Tối',
    colorTheme: 'from-yellow-400 to-amber-400',
    objectives: ['Năng lượng ánh sáng', 'Tia sáng', 'Vùng tối', 'Nhật thực', 'Nguyệt thực'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b15-q1', difficulty: 'NB', question: 'Ánh sáng là:', options: [{ key: 'A', text: 'Một dạng vật chất.' }, { key: 'B', text: 'Một dạng năng lượng.' }, { key: 'C', text: 'Một loại chất lỏng.' }, { key: 'D', text: 'Một loại sóng âm.' }], correctAnswer: 'B', explanation: 'Ánh sáng mang năng lượng (quang năng).' },
        { id: 'b15-q2', difficulty: 'NB', question: 'Chùm sáng song song gồm:', options: [{ key: 'A', text: 'Các tia sáng giao nhau.' }, { key: 'B', text: 'Các tia sáng loe rộng ra.' }, { key: 'C', text: 'Các tia sáng không giao nhau trên đường truyền.' }, { key: 'D', text: 'Các tia sáng hội tụ tại một điểm.' }], correctAnswer: 'C', explanation: 'Định nghĩa chùm sáng song song.' },
        { id: 'b15-q3', difficulty: 'NB', question: 'Quy ước biểu diễn tia sáng là:', options: [{ key: 'A', text: 'Một đường cong.' }, { key: 'B', text: 'Một đường thẳng.' }, { key: 'C', text: 'Một đường thẳng có mũi tên chỉ hướng.' }, { key: 'D', text: 'Một đường gấp khúc.' }], correctAnswer: 'C', explanation: 'Tia sáng là đường thẳng có mũi tên.' },
        { id: 'b15-q4', difficulty: 'NB', question: 'Vùng tối là vùng:', options: [{ key: 'A', text: 'Nhận được toàn bộ ánh sáng.' }, { key: 'B', text: 'Không nhận được ánh sáng từ nguồn sáng.' }, { key: 'C', text: 'Nhận được một phần ánh sáng.' }, { key: 'D', text: 'Có màu xám.' }], correctAnswer: 'B', explanation: 'Vùng phía sau vật cản, không nhận được ánh sáng.' },
        { id: 'b15-q5', difficulty: 'TH', question: 'Hiện tượng nhật thực xảy ra khi nào?', options: [{ key: 'A', text: 'Mặt Trăng nằm giữa Mặt Trời và Trái Đất.' }, { key: 'B', text: 'Trái Đất nằm giữa Mặt Trời và Mặt Trăng.' }, { key: 'C', text: 'Mặt Trời nằm giữa Trái Đất và Mặt Trăng.' }, { key: 'D', text: 'Ban đêm.' }], correctAnswer: 'A', explanation: 'Mặt Trăng che khuất ánh sáng từ Mặt Trời chiếu xuống Trái Đất.' },
        { id: 'b15-q6', difficulty: 'TH', question: 'Vùng nửa tối (vùng tối không hoàn toàn) xuất hiện khi:', options: [{ key: 'A', text: 'Nguồn sáng hẹp (như điểm sáng).' }, { key: 'B', text: 'Nguồn sáng rộng.' }, { key: 'C', text: 'Không có nguồn sáng.' }, { key: 'D', text: 'Vật cản trong suốt.' }], correctAnswer: 'B', explanation: 'Với nguồn sáng rộng, phía sau vật cản có vùng chỉ nhận được một phần ánh sáng gọi là vùng nửa tối.' },
        { id: 'b15-q7', difficulty: 'TH', question: 'Pin mặt trời hoạt động dựa trên tác dụng nào của ánh sáng?', options: [{ key: 'A', text: 'Tác dụng nhiệt.' }, { key: 'B', text: 'Tác dụng quang điện (biến quang năng thành điện năng).' }, { key: 'C', text: 'Tác dụng sinh học.' }, { key: 'D', text: 'Tác dụng hóa học.' }], correctAnswer: 'B', explanation: 'Chuyển năng lượng ánh sáng thành điện.' },
        { id: 'b15-q8', difficulty: 'NB', question: 'Chùm sáng hội tụ là chùm sáng:', options: [{ key: 'A', text: 'Các tia sáng song song.' }, { key: 'B', text: 'Các tia sáng giao nhau tại một điểm.' }, { key: 'C', text: 'Các tia sáng loe rộng ra.' }, { key: 'D', text: 'Các tia sáng vuông góc nhau.' }], correctAnswer: 'B', explanation: 'Định nghĩa chùm hội tụ.' },
        { id: 'b15-q9', difficulty: 'NB', question: 'Mô hình tia sáng dùng để:', options: [{ key: 'A', text: 'Biểu diễn đường truyền của ánh sáng.' }, { key: 'B', text: 'Đo cường độ ánh sáng.' }, { key: 'C', text: 'Tạo ra ánh sáng.' }, { key: 'D', text: 'Hấp thụ ánh sáng.' }], correctAnswer: 'A', explanation: 'Dùng để mô tả sự truyền đi của ánh sáng.' },
        { id: 'b15-q10', difficulty: 'TH', question: 'Khi xảy ra nguyệt thực, vị trí 3 thiên thể là:', options: [{ key: 'A', text: 'Mặt Trời - Mặt Trăng - Trái Đất.' }, { key: 'B', text: 'Mặt Trời - Trái Đất - Mặt Trăng.' }, { key: 'C', text: 'Trái Đất - Mặt Trời - Mặt Trăng.' }, { key: 'D', text: 'Mặt Trăng - Mặt Trời - Trái Đất.' }], correctAnswer: 'B', explanation: 'Trái Đất chắn sáng từ Mặt Trời chiếu tới Mặt Trăng.' }
      ],
      essay: [
        { id: 'b15-e1', difficulty: 'TH', question: 'Nêu ví dụ chứng tỏ ánh sáng có năng lượng.', sampleAnswer: 'Phơi nắng thấy nóng (tác dụng nhiệt), cây xanh quang hợp nhờ ánh sáng (biến quang năng thành hóa năng), pin mặt trời chạy máy tính (biến quang năng thành điện năng).' },
        { id: 'b15-e2', difficulty: 'VD', question: 'Giải thích hiện tượng Nhật thực. Vẽ hình minh họa vị trí tương đối của Mặt Trời, Mặt Trăng, Trái Đất.', sampleAnswer: 'Nhật thực xảy ra ban ngày, khi Mặt Trăng nằm giữa Mặt Trời và Trái Đất, 3 thiên thể thẳng hàng. Bóng của Mặt Trăng in lên Trái Đất, người ở vùng bóng tối sẽ thấy nhật thực toàn phần.' }
      ]
    }
  },
  {
    id: 'bai-16',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 16: Sự Phản Xạ Ánh Sáng',
    colorTheme: 'from-teal-400 to-cyan-500',
    objectives: ['Định luật phản xạ ánh sáng', 'Phản xạ và Phản xạ khuếch tán'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b16-q1', difficulty: 'NB', question: 'Hiện tượng phản xạ ánh sáng là:', options: [{ key: 'A', text: 'Ánh sáng bị hắt lại môi trường cũ khi gặp bề mặt nhẵn bóng.' }, { key: 'B', text: 'Ánh sáng xuyên qua vật cản.' }, { key: 'C', text: 'Ánh sáng bị hấp thụ hoàn toàn.' }, { key: 'D', text: 'Ánh sáng đổi màu khi gặp vật cản.' }], correctAnswer: 'A', explanation: 'Định nghĩa phản xạ ánh sáng.' },
        { id: 'b16-q2', difficulty: 'NB', question: 'Định luật phản xạ ánh sáng phát biểu:', options: [{ key: 'A', text: 'Góc phản xạ lớn hơn góc tới.' }, { key: 'B', text: 'Góc phản xạ bằng góc tới.' }, { key: 'C', text: 'Góc phản xạ nhỏ hơn góc tới.' }, { key: 'D', text: 'Góc phản xạ bằng nửa góc tới.' }], correctAnswer: 'B', explanation: 'i = i\'.' },
        { id: 'b16-q3', difficulty: 'NB', question: 'Tia phản xạ nằm trong mặt phẳng nào?', options: [{ key: 'A', text: 'Mặt phẳng vuông góc với gương.' }, { key: 'B', text: 'Mặt phẳng chứa tia tới và pháp tuyến tại điểm tới.' }, { key: 'C', text: 'Mặt phẳng gương.' }, { key: 'D', text: 'Bất kì mặt phẳng nào.' }], correctAnswer: 'B', explanation: 'Nội dung định luật phản xạ.' },
        { id: 'b16-q4', difficulty: 'TH', question: 'Phản xạ khuếch tán xảy ra trên bề mặt:', options: [{ key: 'A', text: 'Nhẵn bóng, phẳng (gương soi).' }, { key: 'B', text: 'Gồ ghề, thô ráp.' }, { key: 'C', text: 'Trong suốt.' }, { key: 'D', text: 'Màu đen tuyệt đối.' }], correctAnswer: 'B', explanation: 'Bề mặt gồ ghề hắt ánh sáng theo nhiều hướng khác nhau.' },
        { id: 'b16-q5', difficulty: 'NB', question: 'Góc tới là góc tạo bởi:', options: [{ key: 'A', text: 'Tia tới và mặt gương.' }, { key: 'B', text: 'Tia tới và pháp tuyến tại điểm tới.' }, { key: 'C', text: 'Tia phản xạ và pháp tuyến.' }, { key: 'D', text: 'Tia phản xạ và mặt gương.' }], correctAnswer: 'B', explanation: 'Định nghĩa góc tới (i).' },
        { id: 'b16-q6', difficulty: 'TH', question: 'Chiếu một tia sáng tới gương phẳng với góc tới i = 30 độ. Góc phản xạ i\' là:', options: [{ key: 'A', text: '30 độ.' }, { key: 'B', text: '60 độ.' }, { key: 'C', text: '90 độ.' }, { key: 'D', text: '0 độ.' }], correctAnswer: 'A', explanation: 'i\' = i = 30 độ.' },
        { id: 'b16-q7', difficulty: 'TH', question: 'Nếu tia sáng tới vuông góc với mặt gương thì góc phản xạ bằng:', options: [{ key: 'A', text: '90 độ.' }, { key: 'B', text: '0 độ.' }, { key: 'C', text: '180 độ.' }, { key: 'D', text: '45 độ.' }], correctAnswer: 'B', explanation: 'Tia tới trùng pháp tuyến → i = 0 → i\' = 0.' },
        { id: 'b16-q8', difficulty: 'NB', question: 'Pháp tuyến là đường thẳng:', options: [{ key: 'A', text: 'Song song với gương.' }, { key: 'B', text: 'Vuông góc với gương tại điểm tới.' }, { key: 'C', text: 'Trùng với tia tới.' }, { key: 'D', text: 'Trùng với tia phản xạ.' }], correctAnswer: 'B', explanation: 'Định nghĩa pháp tuyến.' },
        { id: 'b16-q9', difficulty: 'TH', question: 'Ảnh nhìn thấy trong gương soi là kết quả của hiện tượng:', options: [{ key: 'A', text: 'Phản xạ khuếch tán.' }, { key: 'B', text: 'Phản xạ gương (phản xạ thường).' }, { key: 'C', text: 'Khúc xạ.' }, { key: 'D', text: 'Tán sắc.' }], correctAnswer: 'B', explanation: 'Gương soi phẳng nhẵn tạo phản xạ gương.' },
        { id: 'b16-q10', difficulty: 'VD', question: 'Khi tia tới hợp với mặt gương một góc 40 độ thì góc phản xạ là:', options: [{ key: 'A', text: '40 độ.' }, { key: 'B', text: '50 độ.' }, { key: 'C', text: '80 độ.' }, { key: 'D', text: '100 độ.' }], correctAnswer: 'B', explanation: 'Góc tới = 90 - 40 = 50 độ → Góc phản xạ = 50 độ.' }
      ],
      essay: [
        { id: 'b16-e1', difficulty: 'TH', question: 'Phân biệt phản xạ (phản xạ gương) và phản xạ khuếch tán. Tại sao ta nhìn thấy các vật xung quanh (như bàn, ghế, sách)?', sampleAnswer: 'Phản xạ gương xảy ra trên mặt nhẵn (tạo ảnh rõ), phản xạ khuếch tán trên mặt gồ ghề (ánh sáng hắt mọi hướng). Ta nhìn thấy vật nhờ ánh sáng từ nguồn chiếu vào vật bị phản xạ khuếch tán đến mắt ta.' },
        { id: 'b16-e2', difficulty: 'VD', question: 'Chiếu tia sáng SI lên gương phẳng. Biết góc hợp bởi tia tới SI và tia phản xạ IR là 100 độ. Tính góc tới và góc hợp bởi tia tới với mặt gương.', sampleAnswer: 'i + i\' = 100 độ. Vì i = i\' → i = 50 độ. Góc hợp bởi tia tới và mặt gương = 90 - 50 = 40 độ.' }
      ]
    }
  },
  {
    id: 'bai-17',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 17: Ảnh Của Vật Qua Gương Phẳng',
    colorTheme: 'from-cyan-500 to-sky-500',
    objectives: ['Tính chất ảnh', 'Dựng ảnh', 'Đối xứng'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b17-q1', difficulty: 'NB', question: 'Ảnh tạo bởi gương phẳng có tính chất gì?', options: [{ key: 'A', text: 'Ảnh thật, hứng được trên màn chắn.' }, { key: 'B', text: 'Ảnh ảo, không hứng được trên màn chắn, to bằng vật.' }, { key: 'C', text: 'Ảnh ảo, bé hơn vật.' }, { key: 'D', text: 'Ảnh thật, ngược chiều vật.' }], correctAnswer: 'B', explanation: 'Ảnh ảo, to bằng vật và đối xứng.' },
        { id: 'b17-q2', difficulty: 'TH', question: 'Khoảng cách từ ảnh đến gương phẳng so với khoảng cách từ vật đến gương là:', options: [{ key: 'A', text: 'Bằng nhau.' }, { key: 'B', text: 'Ảnh xa hơn vật.' }, { key: 'C', text: 'Ảnh gần hơn vật.' }, { key: 'D', text: 'Tùy kích thước vật.' }], correctAnswer: 'A', explanation: 'Tính chất đối xứng qua gương.' },
        { id: 'b17-q3', difficulty: 'NB', question: 'Nếu vật cao 1,5m thì ảnh qua gương phẳng cao bao nhiêu?', options: [{ key: 'A', text: '3m.' }, { key: 'B', text: '1,5m.' }, { key: 'C', text: '0,75m.' }, { key: 'D', text: '1m.' }], correctAnswer: 'B', explanation: 'Ảnh to bằng vật.' },
        { id: 'b17-q4', difficulty: 'VD', question: 'Chữ "AMBULANCE" trên xe cứu thương thường được viết ngược để:', options: [{ key: 'A', text: 'Trang trí.' }, { key: 'B', text: 'Người lái xe phía trước nhìn qua gương chiếu hậu thấy chữ xuôi chiều dễ đọc.' }, { key: 'C', text: 'Do lỗi in ấn.' }, { key: 'D', text: 'Bí mật quân sự.' }], correctAnswer: 'B', explanation: 'Do tính chất ảnh qua gương phẳng bị trái phải đảo ngược đối xứng.' },
        { id: 'b17-q5', difficulty: 'TH', question: 'Một người đứng cách gương 2m. Ảnh của người đó cách gương bao nhiêu?', options: [{ key: 'A', text: '1m.' }, { key: 'B', text: '2m.' }, { key: 'C', text: '4m.' }, { key: 'D', text: '0,5m.' }], correctAnswer: 'B', explanation: 'Khoảng cách ảnh = Khoảng cách vật.' },
        { id: 'b17-q6', difficulty: 'TH', question: 'Ảnh của một điểm sáng S qua gương phẳng được tạo bởi:', options: [{ key: 'A', text: 'Giao điểm của các tia phản xạ.' }, { key: 'B', text: 'Giao điểm của đường kéo dài các tia phản xạ.' }, { key: 'C', text: 'Giao điểm của các tia tới.' }, { key: 'D', text: 'Giao điểm của pháp tuyến.' }], correctAnswer: 'B', explanation: 'Vì là ảnh ảo nên được tạo bởi đường kéo dài.' },
        { id: 'b17-q7', difficulty: 'NB', question: 'Dụng cụ nào ứng dụng gương phẳng?', options: [{ key: 'A', text: 'Kính lúp.' }, { key: 'B', text: 'Kính cận.' }, { key: 'C', text: 'Kính tiềm vọng.' }, { key: 'D', text: 'Kính hiển vi.' }], correctAnswer: 'C', explanation: 'Kính tiềm vọng dùng hệ thống gương phẳng để đổi hướng ánh sáng.' },
        { id: 'b17-q8', difficulty: 'TH', question: 'Khi nào ta thấy ảnh ảo?', options: [{ key: 'A', text: 'Khi ánh sáng hội tụ thật.' }, { key: 'B', text: 'Khi ánh sáng không lọt vào mắt.' }, { key: 'C', text: 'Khi nhìn vào gương phẳng.' }, { key: 'D', text: 'Khi dùng màn chắn hứng ảnh.' }], correctAnswer: 'C', explanation: 'Gương phẳng tạo ảnh ảo.' },
        { id: 'b17-q9', difficulty: 'VD', question: 'Khoảng cách từ vật đến ảnh qua gương phẳng gấp mấy lần khoảng cách từ vật đến gương?', options: [{ key: 'A', text: '1 lần.' }, { key: 'B', text: '2 lần.' }, { key: 'C', text: '0,5 lần.' }, { key: 'D', text: '4 lần.' }], correctAnswer: 'B', explanation: 'd(vật->ảnh) = d(vật->gương) + d(ảnh->gương) = 2d.' },
        { id: 'b17-q10', difficulty: 'TH', question: 'Đặt một viên phấn thẳng đứng trước gương phẳng. Ảnh của nó:', options: [{ key: 'A', text: 'Nằm ngang.' }, { key: 'B', text: 'Thẳng đứng, cùng chiều.' }, { key: 'C', text: 'Ngược chiều.' }, { key: 'D', text: 'Xiên góc.' }], correctAnswer: 'B', explanation: 'Ảnh cùng chiều với vật.' }
      ],
      essay: [
        { id: 'b17-e1', difficulty: 'TH', question: 'Nêu tính chất ảnh của vật tạo bởi gương phẳng. Làm thế nào để vẽ ảnh của một mũi tên AB đặt trước gương?', sampleAnswer: 'Tính chất: Ảnh ảo, to bằng vật, đối xứng với vật qua gương. Cách vẽ: Lấy A\' đối xứng A qua gương, B\' đối xứng B qua gương. Nối A\'B\' bằng nét đứt.' },
        { id: 'b17-e2', difficulty: 'VD', question: 'Một người cao 1,6m đứng cách gương phẳng treo trên tường 1m. Hỏi ảnh của người đó cao bao nhiêu và cách người đó bao xa?', sampleAnswer: 'Ảnh cao 1,6m (bằng vật). Ảnh cách gương 1m → Ảnh cách người = 1 + 1 = 2m.' }
      ]
    }
  },
  {
    id: 'bai-18',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 18: Nam Châm',
    colorTheme: 'from-slate-500 to-gray-500',
    objectives: ['Nam châm', 'Từ tính', 'Tương tác từ'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b18-q1', difficulty: 'NB', question: 'Nam châm là vật có khả năng:', options: [{ key: 'A', text: 'Hút các vật bằng sắt, thép.' }, { key: 'B', text: 'Hút các vật bằng đồng, nhôm.' }, { key: 'C', text: 'Hút giấy, nhựa.' }, { key: 'D', text: 'Hút mọi vật.' }], correctAnswer: 'A', explanation: 'Nam châm có từ tính hút sắt, thép, niken...' },
        { id: 'b18-q2', difficulty: 'NB', question: 'Nam châm có mấy cực?', options: [{ key: 'A', text: '1 cực.' }, { key: 'B', text: '2 cực (Bắc và Nam).' }, { key: 'C', text: '3 cực.' }, { key: 'D', text: '4 cực.' }], correctAnswer: 'B', explanation: 'Cực Bắc (N) và cực Nam (S).' },
        { id: 'b18-q3', difficulty: 'NB', question: 'Khi để kim nam châm tự do, cực Bắc của nó luôn chỉ hướng nào?', options: [{ key: 'A', text: 'Hướng Nam địa lí.' }, { key: 'B', text: 'Hướng Bắc địa lí.' }, { key: 'C', text: 'Hướng Đông.' }, { key: 'D', text: 'Hướng Tây.' }], correctAnswer: 'B', explanation: 'Định hướng Bắc - Nam của từ trường Trái Đất.' },
        { id: 'b18-q4', difficulty: 'TH', question: 'Hai cực của hai nam châm cùng tên đặt gần nhau sẽ:', options: [{ key: 'A', text: 'Hút nhau.' }, { key: 'B', text: 'Đẩy nhau.' }, { key: 'C', text: 'Không tương tác.' }, { key: 'D', text: 'Vừa hút vừa đẩy.' }], correctAnswer: 'B', explanation: 'Cùng cực đẩy nhau, khác cực hút nhau.' },
        { id: 'b18-q5', difficulty: 'NB', question: 'Kí hiệu N trên nam châm chỉ cực nào?', options: [{ key: 'A', text: 'Cực Nam (South).' }, { key: 'B', text: 'Cực Bắc (North).' }, { key: 'C', text: 'Cực Âm.' }, { key: 'D', text: 'Cực Dương.' }], correctAnswer: 'B', explanation: 'N là viết tắt của North (Bắc).' },
        { id: 'b18-q6', difficulty: 'NB', question: 'Vật liệu nào sau đây là vật liệu từ?', options: [{ key: 'A', text: 'Nhựa.' }, { key: 'B', text: 'Sắt.' }, { key: 'C', text: 'Gỗ.' }, { key: 'D', text: 'Cao su.' }], correctAnswer: 'B', explanation: 'Sắt bị nam châm hút.' },
        { id: 'b18-q7', difficulty: 'TH', question: 'Phần nào của nam châm hút sắt mạnh nhất?', options: [{ key: 'A', text: 'Ở giữa.' }, { key: 'B', text: 'Ở hai cực.' }, { key: 'C', text: 'Chỉ cực Bắc.' }, { key: 'D', text: 'Chỉ cực Nam.' }], correctAnswer: 'B', explanation: 'Từ tính tập trung mạnh nhất ở hai cực.' },
        { id: 'b18-q8', difficulty: 'TH', question: 'Để nhận biết một thanh kim loại có phải là nam châm hay không, ta dùng:', options: [{ key: 'A', text: 'Một thanh gỗ.' }, { key: 'B', text: 'Một thanh sắt non.' }, { key: 'C', text: 'Một kim nam châm thử.' }, { key: 'D', text: 'Một thanh nhựa.' }], correctAnswer: 'C', explanation: 'Đưa lại gần kim nam châm, nếu có lực đẩy/hút định hướng thì là nam châm.' },
        { id: 'b18-q9', difficulty: 'NB', question: 'La bàn dùng để làm gì?', options: [{ key: 'A', text: 'Đo nhiệt độ.' }, { key: 'B', text: 'Xác định phương hướng.' }, { key: 'C', text: 'Đo độ dài.' }, { key: 'D', text: 'Đo khối lượng.' }], correctAnswer: 'B', explanation: 'Ứng dụng của nam châm trong la bàn.' },
        { id: 'b18-q10', difficulty: 'VD', question: 'Nếu bẻ gãy một thanh nam châm làm đôi, ta sẽ được:', options: [{ key: 'A', text: 'Một nửa là cực Bắc, một nửa là cực Nam.' }, { key: 'B', text: 'Hai thanh nam châm mới, mỗi thanh đều có 2 cực.' }, { key: 'C', text: 'Hai thanh sắt mất từ tính.' }, { key: 'D', text: 'Một thanh chỉ có cực Bắc.' }], correctAnswer: 'B', explanation: 'Mỗi mảnh vỡ trở thành một nam châm hoàn chỉnh có đủ 2 cực.' }
      ],
      essay: [
        { id: 'b18-e1', difficulty: 'TH', question: 'Làm thế nào để xác định cực của một thanh nam châm nếu các kí hiệu trên đó bị mờ?', sampleAnswer: 'Treo thanh nam châm bằng sợi dây mảnh để nó quay tự do. Khi cân bằng, đầu chỉ hướng Bắc địa lí là cực Bắc (N), đầu kia là cực Nam (S). Hoặc dùng một nam châm khác đã biết cực để thử (đẩy/hút).' },
        { id: 'b18-e2', difficulty: 'VD', question: 'Tại sao không nên để nam châm gần đồng hồ cơ hoặc thẻ từ ngân hàng?', sampleAnswer: 'Vì từ tính của nam châm có thể làm hỏng các chi tiết bằng sắt thép trong đồng hồ hoặc làm mất dữ liệu từ trên thẻ ngân hàng.' }
      ]
    }
  },
  {
    id: 'bai-19',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 19: Từ Trường',
    colorTheme: 'from-zinc-500 to-neutral-500',
    objectives: ['Khái niệm từ trường', 'Đường sức từ', 'Từ trường Trái Đất'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b19-q1', difficulty: 'NB', question: 'Từ trường tồn tại ở đâu?', options: [{ key: 'A', text: 'Xung quanh điện tích đứng yên.' }, { key: 'B', text: 'Xung quanh nam châm và dòng điện.' }, { key: 'C', text: 'Chỉ xung quanh Trái Đất.' }, { key: 'D', text: 'Chỉ xung quanh sắt.' }], correctAnswer: 'B', explanation: 'Môi trường vật chất bao quanh nam châm hoặc dòng điện.' },
        { id: 'b19-q2', difficulty: 'NB', question: 'Dụng cụ để nhận biết từ trường là:', options: [{ key: 'A', text: 'Vôn kế.' }, { key: 'B', text: 'Kim nam châm (nam châm thử).' }, { key: 'C', text: 'Nhiệt kế.' }, { key: 'D', text: 'Lực kế.' }], correctAnswer: 'B', explanation: 'Kim nam châm bị lệch hướng trong từ trường.' },
        { id: 'b19-q3', difficulty: 'NB', question: 'Đường sức từ của nam châm thẳng có chiều:', options: [{ key: 'A', text: 'Vào Bắc, ra Nam.' }, { key: 'B', text: 'Ra Bắc, vào Nam.' }, { key: 'C', text: 'Cùng chiều kim đồng hồ.' }, { key: 'D', text: 'Ngược chiều kim đồng hồ.' }], correctAnswer: 'B', explanation: 'Quy ước: Ra Bắc (N) - Vào Nam (S).' },
        { id: 'b19-q4', difficulty: 'NB', question: 'Từ phổ là:', options: [{ key: 'A', text: 'Hình ảnh các đường mạt sắt sắp xếp xung quanh nam châm.' }, { key: 'B', text: 'Hình ảnh nam châm.' }, { key: 'C', text: 'Dụng cụ đo từ trường.' }, { key: 'D', text: 'Lực từ.' }], correctAnswer: 'A', explanation: 'Từ phổ cho ta hình ảnh trực quan về từ trường.' },
        { id: 'b19-q5', difficulty: 'TH', question: 'Thí nghiệm Oersted (Ơ-xtét) chứng minh điều gì?', options: [{ key: 'A', text: 'Dòng điện gây ra nhiệt.' }, { key: 'B', text: 'Xung quanh dòng điện có từ trường.' }, { key: 'C', text: 'Nam châm hút sắt.' }, { key: 'D', text: 'Trái Đất là nam châm.' }], correctAnswer: 'B', explanation: 'Dòng điện làm lệch kim nam châm → có từ trường.' },
        { id: 'b19-q6', difficulty: 'TH', question: 'Nơi nào có đường sức từ dày thì:', options: [{ key: 'A', text: 'Từ trường yếu.' }, { key: 'B', text: 'Từ trường mạnh.' }, { key: 'C', text: 'Không có từ trường.' }, { key: 'D', text: 'Từ trường trung bình.' }], correctAnswer: 'B', explanation: 'Mật độ đường sức từ biểu thị độ mạnh yếu của từ trường.' },
        { id: 'b19-q7', difficulty: 'NB', question: 'Trái Đất được xem là một nam châm khổng lồ vì:', options: [{ key: 'A', text: 'Nó hút mọi vật.' }, { key: 'B', text: 'Nó quay quanh Mặt Trời.' }, { key: 'C', text: 'Nó có từ trường (làm la bàn định hướng).' }, { key: 'D', text: 'Nó có nhiều sắt.' }], correctAnswer: 'C', explanation: 'Sự định hướng của la bàn chứng tỏ Trái Đất có từ trường.' },
        { id: 'b19-q8', difficulty: 'TH', question: 'Cực Bắc địa từ của Trái Đất nằm gần:', options: [{ key: 'A', text: 'Cực Bắc địa lí.' }, { key: 'B', text: 'Cực Nam địa lí.' }, { key: 'C', text: 'Xích đạo.' }, { key: 'D', text: 'Tâm Trái Đất.' }], correctAnswer: 'B', explanation: 'Cực từ và cực địa lí ngược nhau (gần đúng).' },
        { id: 'b19-q9', difficulty: 'TH', question: 'Tại một điểm trong từ trường, kim nam châm thử sẽ:', options: [{ key: 'A', text: 'Quay liên tục.' }, { key: 'B', text: 'Định hướng theo một phương xác định.' }, { key: 'C', text: 'Đứng yên bất kì.' }, { key: 'D', text: 'Rơi xuống đất.' }], correctAnswer: 'B', explanation: 'Chịu tác dụng của lực từ làm kim định hướng.' },
        { id: 'b19-q10', difficulty: 'NB', question: 'La bàn định hướng được là nhờ:', options: [{ key: 'A', text: 'Lực hấp dẫn.' }, { key: 'B', text: 'Từ trường Trái Đất.' }, { key: 'C', text: 'Gió.' }, { key: 'D', text: 'Ánh sáng mặt trời.' }], correctAnswer: 'B', explanation: 'La bàn định hướng theo từ trường Trái Đất.' }
      ],
      essay: [
        { id: 'b19-e1', difficulty: 'TH', question: 'Mô tả thí nghiệm tạo ra từ phổ của thanh nam châm thẳng.', sampleAnswer: 'Rắc đều mạt sắt lên tấm nhựa đặt trên thanh nam châm. Gõ nhẹ tấm nhựa. Mạt sắt sẽ sắp xếp thành các đường cong nối 2 cực (đường sức từ).' },
        { id: 'b19-e2', difficulty: 'VD', question: 'Vẽ đường sức từ của một thanh nam châm thẳng và đánh dấu chiều của chúng.', sampleAnswer: 'Vẽ các đường cong đi ra từ cực N, đi vào cực S. Mật độ dày ở 2 cực, thưa ở giữa.' }
      ]
    }
  },
  {
    id: 'bai-20',
    topic: 'PHẦN 3: NĂNG LƯỢNG VÀ BIẾN ĐỔI',
    title: 'Bài 20: Chế Tạo Nam Châm Điện',
    colorTheme: 'from-emerald-600 to-teal-600',
    objectives: ['Cấu tạo nam châm điện', 'Ưu điểm nam châm điện', 'Ứng dụng'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b20-q1', difficulty: 'NB', question: 'Cấu tạo chính của nam châm điện gồm:', options: [{ key: 'A', text: 'Ống dây dẫn và lõi sắt non.' }, { key: 'B', text: 'Thanh nam châm vĩnh cửu.' }, { key: 'C', text: 'Dây dẫn và pin.' }, { key: 'D', text: 'Lõi đồng và dây nhôm.' }], correctAnswer: 'A', explanation: 'Cuộn dây có dòng điện bao quanh lõi sắt non.' },
        { id: 'b20-q2', difficulty: 'TH', question: 'Làm thế nào để tăng lực từ của nam châm điện?', options: [{ key: 'A', text: 'Giảm cường độ dòng điện.' }, { key: 'B', text: 'Tăng cường độ dòng điện hoặc tăng số vòng dây.' }, { key: 'C', text: 'Bỏ lõi sắt non đi.' }, { key: 'D', text: 'Đảo chiều dòng điện.' }], correctAnswer: 'B', explanation: 'Từ trường tỉ lệ thuận với dòng điện và số vòng dây.' },
        { id: 'b20-q3', difficulty: 'TH', question: 'Tại sao dùng sắt non làm lõi nam châm điện?', options: [{ key: 'A', text: 'Vì rẻ tiền.' }, { key: 'B', text: 'Vì sắt non dẫn điện tốt.' }, { key: 'C', text: 'Vì sắt non làm tăng mạnh từ tính và mất từ tính ngay khi ngắt điện.' }, { key: 'D', text: 'Vì sắt non cứng.' }], correctAnswer: 'C', explanation: 'Đặc tính từ mềm của sắt non.' },
        { id: 'b20-q4', difficulty: 'NB', question: 'Khi ngắt dòng điện chạy qua ống dây, nam châm điện sẽ:', options: [{ key: 'A', text: 'Mất hết từ tính (hoặc còn rất ít).' }, { key: 'B', text: 'Giữ nguyên từ tính.' }, { key: 'C', text: 'Trở thành nam châm vĩnh cửu.' }, { key: 'D', text: 'Đảo cực.' }], correctAnswer: 'A', explanation: 'Ưu điểm của nam châm điện là điều khiển được từ tính.' },
        { id: 'b20-q5', difficulty: 'NB', question: 'Ứng dụng của nam châm điện là:', options: [{ key: 'A', text: 'Cần cẩu dọn rác sắt vụn.' }, { key: 'B', text: 'Chuông điện.' }, { key: 'C', text: 'Rơ-le điện từ.' }, { key: 'D', text: 'Tất cả các ý trên.' }], correctAnswer: 'D', explanation: 'Các thiết bị này đều dùng nam châm điện.' },
        { id: 'b20-q6', difficulty: 'TH', question: 'Nếu thay lõi sắt non bằng lõi thép thì:', options: [{ key: 'A', text: 'Nam châm mạnh hơn.' }, { key: 'B', text: 'Khi ngắt điện, lõi thép vẫn giữ được từ tính (thành nam châm vĩnh cửu).' }, { key: 'C', text: 'Không có tác dụng gì.' }, { key: 'D', text: 'Nam châm yếu đi.' }], correctAnswer: 'B', explanation: 'Thép có từ tính cứng, giữ từ lâu.' },
        { id: 'b20-q7', difficulty: 'NB', question: 'Từ trường của nam châm điện phụ thuộc vào:', options: [{ key: 'A', text: 'Chiều dài dây dẫn.' }, { key: 'B', text: 'Dòng điện chạy qua ống dây.' }, { key: 'C', text: 'Màu sắc dây dẫn.' }, { key: 'D', text: 'Nhiệt độ.' }], correctAnswer: 'B', explanation: 'Phụ thuộc dòng điện.' },
        { id: 'b20-q8', difficulty: 'NB', question: 'Trong chuông điện, nam châm điện có tác dụng gì?', options: [{ key: 'A', text: 'Tạo ra tiếng kêu trực tiếp.' }, { key: 'B', text: 'Hút miếng sắt gắn với búa gõ để gõ vào chuông.' }, { key: 'C', text: 'Làm đèn sáng.' }, { key: 'D', text: 'Cung cấp điện.' }], correctAnswer: 'B', explanation: 'Hút miếng sắt làm búa gõ vào chuông.' },
        { id: 'b20-q9', difficulty: 'NB', question: 'Lợi thế của nam châm điện so với nam châm vĩnh cửu là:', options: [{ key: 'A', text: 'Có thể thay đổi độ mạnh yếu và cực từ dễ dàng.' }, { key: 'B', text: 'Không cần dùng điện.' }, { key: 'C', text: 'Luôn luôn hút sắt.' }, { key: 'D', text: 'Nhỏ gọn hơn.' }], correctAnswer: 'A', explanation: 'Điều chỉnh được bằng dòng điện.' },
        { id: 'b20-q10', difficulty: 'NB', question: 'Để xác định cực của nam châm điện, ta dùng:', options: [{ key: 'A', text: 'Quy tắc nắm tay phải (hoặc dùng kim nam châm).' }, { key: 'B', text: 'Quy tắc bàn tay trái.' }, { key: 'C', text: 'Lực kế.' }, { key: 'D', text: 'Vôn kế.' }], correctAnswer: 'A', explanation: 'Dùng kim nam châm thử hoặc quy tắc nắm tay phải.' }
      ],
      essay: [
        { id: 'b20-e1', difficulty: 'TH', question: 'Nêu các cách để làm tăng từ tính của một nam châm điện.', sampleAnswer: '(1) Tăng cường độ dòng điện chạy qua các vòng dây. (2) Tăng số vòng dây của cuộn dây.' },
        { id: 'b20-e2', difficulty: 'VD', question: 'Giải thích hoạt động của cần cẩu dùng nam châm điện để bốc dỡ sắt thép.', sampleAnswer: 'Khi đóng điện, nam châm điện hút các vật liệu sắt thép. Di chuyển cần cẩu đến nơi cần thả. Ngắt điện, nam châm mất từ tính, sắt thép rơi xuống.' }
      ]
    }
  },
  // =================================================================
  // PHẦN 4: VẬT SỐNG (SINH HỌC)
  // =================================================================
  {
    id: 'bai-21',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 21: Trao Đổi Chất Và Chuyển Hóa Năng Lượng',
    colorTheme: 'from-green-500 to-emerald-600',
    objectives: ['Khái niệm trao đổi chất', 'Chuyển hóa năng lượng', 'Vai trò sinh lý', 'Tự dưỡng và Dị dưỡng'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b21-q1', difficulty: 'NB', question: 'Trao đổi chất là gì?', options: [{ key: 'A', text: 'Quá trình lấy thức ăn và thải phân.' }, { key: 'B', text: 'Quá trình cơ thể lấy chất từ môi trường, biến đổi chúng và thải chất thải ra ngoài.' }, { key: 'C', text: 'Quá trình vận động của cơ thể.' }, { key: 'D', text: 'Quá trình lớn lên.' }], correctAnswer: 'B', explanation: 'Định nghĩa trao đổi chất.' },
        { id: 'b21-q2', difficulty: 'NB', question: 'Chuyển hóa năng lượng trong cơ thể sinh vật là:', options: [{ key: 'A', text: 'Sự biến đổi năng lượng từ dạng này sang dạng khác.' }, { key: 'B', text: 'Sự tạo ra năng lượng mới.' }, { key: 'C', text: 'Sự tiêu thụ năng lượng.' }, { key: 'D', text: 'Sự mất đi của năng lượng.' }], correctAnswer: 'A', explanation: 'Biến đổi từ quang năng → hóa năng, hóa năng → nhiệt năng...' },
        { id: 'b21-q3', difficulty: 'NB', question: 'Vai trò của trao đổi chất và chuyển hóa năng lượng là:', options: [{ key: 'A', text: 'Giúp sinh vật tồn tại, sinh trưởng, phát triển, sinh sản.' }, { key: 'B', text: 'Làm sinh vật già đi.' }, { key: 'C', text: 'Chỉ giúp sinh vật vận động.' }, { key: 'D', text: 'Không có vai trò gì quan trọng.' }], correctAnswer: 'A', explanation: 'Cung cấp vật chất và năng lượng cho mọi hoạt động sống.' },
        { id: 'b21-q4', difficulty: 'TH', question: 'Trong quá trình quang hợp, năng lượng được chuyển hóa từ:', options: [{ key: 'A', text: 'Hóa năng sang quang năng.' }, { key: 'B', text: 'Quang năng sang hóa năng.' }, { key: 'C', text: 'Nhiệt năng sang động năng.' }, { key: 'D', text: 'Điện năng sang nhiệt năng.' }], correctAnswer: 'B', explanation: 'Ánh sáng (quang năng) tích lũy trong chất hữu cơ (hóa năng).' },
        { id: 'b21-q5', difficulty: 'NB', question: 'Sinh vật tự dưỡng là:', options: [{ key: 'A', text: 'Sinh vật tự tổng hợp được chất hữu cơ từ chất vô cơ.' }, { key: 'B', text: 'Sinh vật phải ăn sinh vật khác.' }, { key: 'C', text: 'Động vật ăn thịt.' }, { key: 'D', text: 'Con người.' }], correctAnswer: 'A', explanation: 'Ví dụ thực vật quang hợp.' },
        { id: 'b21-q6', difficulty: 'NB', question: 'Sinh vật dị dưỡng là:', options: [{ key: 'A', text: 'Thực vật.' }, { key: 'B', text: 'Tảo.' }, { key: 'C', text: 'Động vật và con người.' }, { key: 'D', text: 'Cây xanh.' }], correctAnswer: 'C', explanation: 'Phải lấy chất hữu cơ có sẵn từ thức ăn.' },
        { id: 'b21-q7', difficulty: 'TH', question: 'Dấu hiệu đặc trưng của trao đổi chất là:', options: [{ key: 'A', text: 'Thu nhận các chất từ môi trường.' }, { key: 'B', text: 'Vận chuyển các chất.' }, { key: 'C', text: 'Biến đổi các chất và thải bã.' }, { key: 'D', text: 'Tất cả các ý trên.' }], correctAnswer: 'D', explanation: 'Bao gồm thu nhận, biến đổi và thải loại.' },
        { id: 'b21-q8', difficulty: 'VD', question: 'Khi chạy bộ, cơ thể chuyển hóa hóa năng thành:', options: [{ key: 'A', text: 'Động năng và nhiệt năng.' }, { key: 'B', text: 'Quang năng.' }, { key: 'C', text: 'Điện năng.' }, { key: 'D', text: 'Thủy năng.' }], correctAnswer: 'A', explanation: 'Năng lượng từ thức ăn → vận động (động năng) + nóng cơ thể (nhiệt năng).' },
        { id: 'b21-q9', difficulty: 'NB', question: 'Quá trình đào thải chất cặn bã ra khỏi cơ thể gọi là:', options: [{ key: 'A', text: 'Dinh dưỡng.' }, { key: 'B', text: 'Bài tiết.' }, { key: 'C', text: 'Hô hấp.' }, { key: 'D', text: 'Tuần hoàn.' }], correctAnswer: 'B', explanation: 'Thải chất dư thừa, độc hại ra môi trường.' },
        { id: 'b21-q10', difficulty: 'TH', question: 'Nếu ngừng trao đổi chất, sinh vật sẽ:', options: [{ key: 'A', text: 'Sống tốt hơn.' }, { key: 'B', text: 'Ngủ đông.' }, { key: 'C', text: 'Bị chết.' }, { key: 'D', text: 'Không ảnh hưởng gì.' }], correctAnswer: 'C', explanation: 'Trao đổi chất là điều kiện tiên quyết của sự sống.' }
      ],
      essay: [
        { id: 'b21-e1', difficulty: 'TH', question: 'Phân biệt sinh vật tự dưỡng và sinh vật dị dưỡng. Cho ví dụ.', sampleAnswer: 'Tự dưỡng: Tự tổng hợp chất hữu cơ từ chất vô cơ (VD: cây lúa, tảo). Dị dưỡng: Lấy chất hữu cơ có sẵn từ sinh vật khác (VD: con bò, con người, nấm).' },
        { id: 'b21-e2', difficulty: 'VD', question: 'Tại sao khi hoạt động mạnh (chơi thể thao), ta thấy nóng người, đổ mồ hôi và thở gấp?', sampleAnswer: 'Do cơ thể tăng cường chuyển hóa năng lượng để cung cấp cho cơ bắp hoạt động. Quá trình này tỏa nhiệt (nóng), thải ra nhiều CO2 (thở gấp) và nước (mồ hôi).' }
      ]
    }
  },
  {
    id: 'bai-22',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 22: Quang Hợp Ở Thực Vật',
    colorTheme: 'from-emerald-500 to-green-500',
    objectives: ['Khái niệm quang hợp', 'Nguyên liệu và sản phẩm', 'Vai trò của lá cây'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b22-q1', difficulty: 'NB', question: 'Quang hợp diễn ra chủ yếu ở bộ phận nào của cây?', options: [{ key: 'A', text: 'Rễ.' }, { key: 'B', text: 'Thân.' }, { key: 'C', text: 'Lá.' }, { key: 'D', text: 'Hoa.' }], correctAnswer: 'C', explanation: 'Lá là cơ quan quang hợp chủ yếu vì chứa nhiều lục lạp.' },
        { id: 'b22-q2', difficulty: 'NB', question: 'Bào quan thực hiện chức năng quang hợp là:', options: [{ key: 'A', text: 'Ti thể.' }, { key: 'B', text: 'Lục lạp.' }, { key: 'C', text: 'Nhân tế bào.' }, { key: 'D', text: 'Không bào.' }], correctAnswer: 'B', explanation: 'Lục lạp chứa diệp lục hấp thu ánh sáng.' },
        { id: 'b22-q3', difficulty: 'NB', question: 'Nguyên liệu của quá trình quang hợp gồm:', options: [{ key: 'A', text: 'Nước và khí Oxygen.' }, { key: 'B', text: 'Nước và khí Carbon dioxide.' }, { key: 'C', text: 'Khí Carbon dioxide và Glucose.' }, { key: 'D', text: 'Khí Oxygen và Glucose.' }], correctAnswer: 'B', explanation: 'Cây lấy nước từ rễ và CO2 từ không khí.' },
        { id: 'b22-q4', difficulty: 'NB', question: 'Sản phẩm của quang hợp là:', options: [{ key: 'A', text: 'Glucose (tinh bột) và khí Oxygen.' }, { key: 'B', text: 'Nước và khí Carbon dioxide.' }, { key: 'C', text: 'Năng lượng và khí Carbon dioxide.' }, { key: 'D', text: 'Tinh bột và nước.' }], correctAnswer: 'A', explanation: 'Phương trình: Nước + CO2 -> Glucose + Oxygen.' },
        { id: 'b22-q5', difficulty: 'NB', question: 'Khí nào được giải phóng ra môi trường trong quá trình quang hợp?', options: [{ key: 'A', text: 'Nitrogen.' }, { key: 'B', text: 'Hydrogen.' }, { key: 'C', text: 'Carbon dioxide.' }, { key: 'D', text: 'Oxygen.' }], correctAnswer: 'D', explanation: 'Oxygen được giải phóng qua khí khổng.' },
        { id: 'b22-q6', difficulty: 'NB', question: 'Chất hữu cơ được tạo ra trong quang hợp là:', options: [{ key: 'A', text: 'Protein.' }, { key: 'B', text: 'Lipid.' }, { key: 'C', text: 'Glucose (Carbohydrate).' }, { key: 'D', text: 'Vitamin.' }], correctAnswer: 'C', explanation: 'Sản phẩm trực tiếp là Glucose, sau đó liên kết thành tinh bột.' },
        { id: 'b22-q7', difficulty: 'TH', question: 'Vai trò của ánh sáng trong quang hợp là:', options: [{ key: 'A', text: 'Cung cấp năng lượng.' }, { key: 'B', text: 'Làm mát lá cây.' }, { key: 'C', text: 'Cung cấp nước.' }, { key: 'D', text: 'Cung cấp khoáng.' }], correctAnswer: 'A', explanation: 'Diệp lục hấp thu năng lượng ánh sáng để tổng hợp chất hữu cơ.' },
        { id: 'b22-q8', difficulty: 'TH', question: 'Trong quang hợp, năng lượng được chuyển hóa như thế nào?', options: [{ key: 'A', text: 'Từ hóa năng sang quang năng.' }, { key: 'B', text: 'Từ quang năng sang hóa năng.' }, { key: 'C', text: 'Từ nhiệt năng sang động năng.' }, { key: 'D', text: 'Từ điện năng sang hóa năng.' }], correctAnswer: 'B', explanation: 'Năng lượng ánh sáng (quang năng) chuyển thành năng lượng trong liên kết hóa học (hóa năng).' },
        { id: 'b22-q9', difficulty: 'NB', question: 'Lá cây có màu xanh lục là do:', options: [{ key: 'A', text: 'Thành tế bào.' }, { key: 'B', text: 'Diệp lục trong lục lạp.' }, { key: 'C', text: 'Nhân tế bào.' }, { key: 'D', text: 'Khí khổng.' }], correctAnswer: 'B', explanation: 'Diệp lục là sắc tố tạo màu xanh cho lá.' },
        { id: 'b22-q10', difficulty: 'TH', question: 'Thân non và quả xanh có quang hợp được không?', options: [{ key: 'A', text: 'Có, vì chúng cũng chứa diệp lục.' }, { key: 'B', text: 'Không, chỉ có lá mới quang hợp.' }, { key: 'C', text: 'Không, vì chúng không có khí khổng.' }, { key: 'D', text: 'Có, nhưng tạo ra sản phẩm khác.' }], correctAnswer: 'A', explanation: 'Bất kỳ bộ phận nào có màu xanh (chứa lục lạp) đều có thể quang hợp.' }
      ],
      essay: [
        { id: 'b22-e1', difficulty: 'TH', question: 'Viết phương trình tổng quát dạng chữ của quá trình quang hợp.', sampleAnswer: 'Nước + Carbon dioxide --(Ánh sáng, Diệp lục)--> Glucose + Oxygen.' },
        { id: 'b22-e2', difficulty: 'VD', question: 'Tại sao quang hợp có vai trò quan trọng đối với sự sống trên Trái Đất?', sampleAnswer: 'Cung cấp chất hữu cơ (thức ăn) và năng lượng cho sinh vật. Cung cấp khí Oxygen cho sự hô hấp. Điều hòa khí hậu (cân bằng CO2 và O2).' }
      ]
    }
  },
  {
    id: 'bai-23',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 23: Một Số Yếu Tố Ảnh Hưởng Đến Quang Hợp',
    colorTheme: 'from-teal-500 to-emerald-500',
    objectives: ['Các yếu tố ảnh hưởng quang hợp', 'Cây ưa sáng, ưa bóng', 'Ứng dụng thực tiễn'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b23-q1', difficulty: 'NB', question: 'Các yếu tố chủ yếu ảnh hưởng đến quang hợp là:', options: [{ key: 'A', text: 'Ánh sáng, nước, khí CO2, nhiệt độ.' }, { key: 'B', text: 'Ánh sáng, gió, đất, phân bón.' }, { key: 'C', text: 'Nhiệt độ, độ ẩm, sâu bệnh.' }, { key: 'D', text: 'Con người và động vật.' }], correctAnswer: 'A', explanation: 'Các yếu tố môi trường chính tác động đến quang hợp.' },
        { id: 'b23-q2', difficulty: 'TH', question: 'Cây ưa sáng thường sống ở đâu?', options: [{ key: 'A', text: 'Dưới tán rừng rậm.' }, { key: 'B', text: 'Trong hang động.' }, { key: 'C', text: 'Nơi quang đãng, nhiều ánh sáng.' }, { key: 'D', text: 'Trong nhà.' }], correctAnswer: 'C', explanation: 'Cây ưa sáng cần cường độ ánh sáng cao (ví dụ: lúa, ngô, dừa).' },
        { id: 'b23-q3', difficulty: 'NB', question: 'Nồng độ khí Carbon dioxide (CO2) thấp nhất mà cây có thể quang hợp là:', options: [{ key: 'A', text: '0,008% - 0,01%.' }, { key: 'B', text: '0,03%.' }, { key: 'C', text: '0,2%.' }, { key: 'D', text: '1%.' }], correctAnswer: 'A', explanation: 'Dưới ngưỡng này quang hợp ngừng lại.' },
        { id: 'b23-q4', difficulty: 'TH', question: 'Khi nhiệt độ quá cao (trên 40 độ C) hoặc quá thấp, quang hợp sẽ:', options: [{ key: 'A', text: 'Tăng lên rất nhanh.' }, { key: 'B', text: 'Giảm hoặc ngừng hẳn.' }, { key: 'C', text: 'Không thay đổi.' }, { key: 'D', text: 'Ổn định.' }], correctAnswer: 'B', explanation: 'Nhiệt độ ảnh hưởng đến hoạt động của enzyme quang hợp.' },
        { id: 'b23-q5', difficulty: 'TH', question: 'Vai trò của nước trong quang hợp là:', options: [{ key: 'A', text: 'Là nguyên liệu và điều tiết khí khổng.' }, { key: 'B', text: 'Chỉ để làm mát cây.' }, { key: 'C', text: 'Không tham gia trực tiếp.' }, { key: 'D', text: 'Chỉ giúp vận chuyển chất.' }], correctAnswer: 'A', explanation: 'Nước là nguyên liệu và giúp khí khổng mở để lấy CO2.' },
        { id: 'b23-q6', difficulty: 'TH', question: 'Cây ưa bóng (ví dụ: lá lốt) thường có đặc điểm:', options: [{ key: 'A', text: 'Phiến lá dày, màu xanh nhạt.' }, { key: 'B', text: 'Phiến lá mỏng, màu xanh thẫm.' }, { key: 'C', text: 'Không có lá.' }, { key: 'D', text: 'Lá màu đỏ.' }], correctAnswer: 'B', explanation: 'Thích nghi để hấp thu ánh sáng yếu tốt hơn.' },
        { id: 'b23-q7', difficulty: 'VD', question: 'Biện pháp kĩ thuật nào giúp tăng năng suất cây trồng dựa trên điều khiển ánh sáng?', options: [{ key: 'A', text: 'Trồng cây mật độ quá dày.' }, { key: 'B', text: 'Chiếu sáng nhân tạo (đèn LED) vào ban đêm cho thanh long.' }, { key: 'C', text: 'Che kín cây cả ngày.' }, { key: 'D', text: 'Trồng cây trong tối hoàn toàn.' }], correctAnswer: 'B', explanation: 'Tăng thời gian quang hợp bằng đèn.' },
        { id: 'b23-q8', difficulty: 'TH', question: 'Tại sao trời nắng gắt, cây thường quang hợp kém?', options: [{ key: 'A', text: 'Vì thiếu ánh sáng.' }, { key: 'B', text: 'Vì khí khổng đóng để tránh mất nước, làm thiếu CO2.' }, { key: 'C', text: 'Vì nhiệt độ quá thấp.' }, { key: 'D', text: 'Vì cây ngủ.' }], correctAnswer: 'B', explanation: 'Cây đóng khí khổng để giữ nước → CO2 không vào được → giảm quang hợp.' },
        { id: 'b23-q9', difficulty: 'TH', question: 'Nồng độ CO2 trong không khí tăng quá cao (trên 0,2%) sẽ:', options: [{ key: 'A', text: 'Làm tăng quang hợp mãi mãi.' }, { key: 'B', text: 'Gây độc và làm chết cây.' }, { key: 'C', text: 'Không ảnh hưởng gì.' }, { key: 'D', text: 'Giúp cây lớn nhanh hơn.' }], correctAnswer: 'B', explanation: 'Nồng độ CO2 quá cao ức chế quang hợp.' },
        { id: 'b23-q10', difficulty: 'VD', question: 'Trong trồng trọt, để cây quang hợp tốt cần:', options: [{ key: 'A', text: 'Bón phân, tưới nước hợp lí, gieo trồng đúng mật độ.' }, { key: 'B', text: 'Không tưới nước.' }, { key: 'C', text: 'Trồng cây ở nơi tối tăm.' }, { key: 'D', text: 'Bón càng nhiều phân càng tốt.' }], correctAnswer: 'A', explanation: 'Đảm bảo đủ nước, khoáng và ánh sáng cho cây.' }
      ],
      essay: [
        { id: 'b23-e1', difficulty: 'VD', question: 'Tại sao ở các thành phố lớn, người ta thường trồng nhiều cây xanh?', sampleAnswer: 'Cây xanh quang hợp hấp thụ khí CO2 (gây hiệu ứng nhà kính) và giải phóng khí O2 (cần cho hô hấp), giúp làm sạch không khí, giảm ô nhiễm và nhiệt độ môi trường.' },
        { id: 'b23-e2', difficulty: 'VD', question: 'Giải thích vì sao người ta dùng đèn chiếu sáng cho cây thanh long vào ban đêm?', sampleAnswer: 'Đây là cây ngày dài. Chiếu sáng ban đêm để kích thích cây quang hợp và phân hóa mầm hoa trái vụ, giúp tăng năng suất quả.' }
      ]
    }
  },
  {
    id: 'bai-25',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 25: Hô Hấp Tế Bào',
    colorTheme: 'from-green-600 to-teal-600',
    objectives: ['Khái niệm hô hấp tế bào', 'Nguyên liệu và sản phẩm', 'Ti thể', 'Quan hệ quang hợp - hô hấp'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b25-q1', difficulty: 'NB', question: 'Hô hấp tế bào là quá trình:', options: [{ key: 'A', text: 'Tổng hợp chất hữu cơ.' }, { key: 'B', text: 'Phân giải chất hữu cơ để giải phóng năng lượng.' }, { key: 'C', text: 'Lấy khí CO2 và thải O2.' }, { key: 'D', text: 'Trao đổi khí ở phổi.' }], correctAnswer: 'B', explanation: 'Định nghĩa hô hấp tế bào.' },
        { id: 'b25-q2', difficulty: 'NB', question: 'Bào quan thực hiện hô hấp tế bào là:', options: [{ key: 'A', text: 'Lục lạp.' }, { key: 'B', text: 'Ti thể.' }, { key: 'C', text: 'Ribosome.' }, { key: 'D', text: 'Nhân.' }], correctAnswer: 'B', explanation: 'Ti thể là "nhà máy năng lượng" của tế bào.' },
        { id: 'b25-q3', difficulty: 'NB', question: 'Nguyên liệu của hô hấp tế bào là:', options: [{ key: 'A', text: 'CO2 và Nước.' }, { key: 'B', text: 'Glucose và Oxygen.' }, { key: 'C', text: 'Glucose và CO2.' }, { key: 'D', text: 'Nước và Oxygen.' }], correctAnswer: 'B', explanation: 'Phân giải chất hữu cơ (Glucose) nhờ Oxygen.' },
        { id: 'b25-q4', difficulty: 'NB', question: 'Sản phẩm của hô hấp tế bào gồm:', options: [{ key: 'A', text: 'Glucose và Oxygen.' }, { key: 'B', text: 'CO2, Nước và Năng lượng (ATP + nhiệt).' }, { key: 'C', text: 'Tinh bột và muối khoáng.' }, { key: 'D', text: 'Oxygen và Nước.' }], correctAnswer: 'B', explanation: 'Phương trình hô hấp.' },
        { id: 'b25-q5', difficulty: 'NB', question: 'Phương trình tổng quát của hô hấp tế bào là:', options: [{ key: 'A', text: 'Glucose + Oxygen → Nước + Carbon dioxide + Năng lượng.' }, { key: 'B', text: 'Nước + CO2 → Glucose + Oxygen.' }, { key: 'C', text: 'Glucose → Rượu + CO2.' }, { key: 'D', text: 'Protein → Amino acid.' }], correctAnswer: 'A', explanation: 'Phương trình hô hấp hiếu khí.' },
        { id: 'b25-q6', difficulty: 'NB', question: 'Năng lượng tạo ra từ hô hấp tế bào chủ yếu được tích lũy trong phân tử:', options: [{ key: 'A', text: 'DNA.' }, { key: 'B', text: 'ATP.' }, { key: 'C', text: 'Protein.' }, { key: 'D', text: 'Lipid.' }], correctAnswer: 'B', explanation: 'ATP là đồng tiền năng lượng của tế bào.' },
        { id: 'b25-q7', difficulty: 'TH', question: 'Mối quan hệ giữa quang hợp và hô hấp là:', options: [{ key: 'A', text: 'Đối lập và mâu thuẫn nhau.' }, { key: 'B', text: 'Độc lập, không liên quan.' }, { key: 'C', text: 'Trái ngược nhưng thống nhất, phụ thuộc lẫn nhau.' }, { key: 'D', text: 'Giống hệt nhau.' }], correctAnswer: 'C', explanation: 'Sản phẩm của quá trình này là nguyên liệu của quá trình kia.' },
        { id: 'b25-q8', difficulty: 'TH', question: 'Hô hấp tế bào xảy ra ở đâu?', options: [{ key: 'A', text: 'Chỉ ở động vật.' }, { key: 'B', text: 'Chỉ ở thực vật.' }, { key: 'C', text: 'Ở tất cả các tế bào của sinh vật.' }, { key: 'D', text: 'Chỉ ở vi khuẩn.' }], correctAnswer: 'C', explanation: 'Mọi tế bào sống đều cần năng lượng từ hô hấp.' },
        { id: 'b25-q9', difficulty: 'TH', question: 'Nếu tế bào thiếu Oxygen thì:', options: [{ key: 'A', text: 'Hô hấp diễn ra bình thường.' }, { key: 'B', text: 'Hô hấp tế bào bị ức chế hoặc chuyển sang lên men (hiệu suất thấp).' }, { key: 'C', text: 'Quang hợp tăng lên.' }, { key: 'D', text: 'Tế bào sinh trưởng nhanh.' }], correctAnswer: 'B', explanation: 'Oxygen là nguyên liệu cần thiết cho hô hấp hiếu khí.' },
        { id: 'b25-q10', difficulty: 'VD', question: 'Hoạt động nào sau đây tiêu tốn nhiều năng lượng hô hấp nhất?', options: [{ key: 'A', text: 'Ngủ.' }, { key: 'B', text: 'Ngồi đọc sách.' }, { key: 'C', text: 'Chạy bộ.' }, { key: 'D', text: 'Nằm nghỉ.' }], correctAnswer: 'C', explanation: 'Vận động mạnh cần nhiều ATP từ hô hấp.' }
      ],
      essay: [
        { id: 'b25-e1', difficulty: 'TH', question: 'So sánh quang hợp và hô hấp về: Nguyên liệu, Sản phẩm, Bào quan thực hiện.', sampleAnswer: 'Quang hợp: Nguyên liệu (CO2, H2O), Sản phẩm (Glucose, O2), Bào quan (Lục lạp). Hô hấp: Nguyên liệu (Glucose, O2), Sản phẩm (CO2, H2O), Bào quan (Ti thể).' },
        { id: 'b25-e2', difficulty: 'VD', question: 'Tại sao khi vận động mạnh (như chạy bền), nhịp thở của chúng ta lại tăng lên?', sampleAnswer: 'Khi vận động, cơ bắp cần nhiều năng lượng → Hô hấp tế bào tăng → Cần nhiều Oxygen và thải nhiều CO2 → Nhịp thở tăng để đáp ứng nhu cầu trao đổi khí.' }
      ]
    }
  },
  {
    id: 'bai-26',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 26: Một Số Yếu Tố Ảnh Hưởng Đến Hô Hấp Tế Bào',
    colorTheme: 'from-cyan-600 to-teal-600',
    objectives: ['Yếu tố ảnh hưởng hô hấp', 'Bảo quản nông sản', 'Bảo quản thực phẩm'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b26-q1', difficulty: 'NB', question: 'Các yếu tố ảnh hưởng đến hô hấp tế bào là:', options: [{ key: 'A', text: 'Nước, nhiệt độ, nồng độ O2, nồng độ CO2.' }, { key: 'B', text: 'Gió, đất, ánh sáng.' }, { key: 'C', text: 'Phân bón, thuốc trừ sâu.' }, { key: 'D', text: 'Lục lạp và ánh sáng.' }], correctAnswer: 'A', explanation: 'Các yếu tố chính tác động đến tốc độ hô hấp.' },
        { id: 'b26-q2', difficulty: 'TH', question: 'Hàm lượng nước trong tế bào liên quan thế nào đến hô hấp?', options: [{ key: 'A', text: 'Nước càng ít, hô hấp càng mạnh.' }, { key: 'B', text: 'Cường độ hô hấp tỉ lệ thuận với hàm lượng nước.' }, { key: 'C', text: 'Nước không ảnh hưởng.' }, { key: 'D', text: 'Nước làm giảm hô hấp.' }], correctAnswer: 'B', explanation: 'Nước là dung môi cho các phản ứng, nước ít → hô hấp giảm (ứng dụng phơi khô hạt).' },
        { id: 'b26-q3', difficulty: 'TH', question: 'Nồng độ CO2 cao sẽ:', options: [{ key: 'A', text: 'Thúc đẩy hô hấp.' }, { key: 'B', text: 'Ức chế hô hấp.' }, { key: 'C', text: 'Không ảnh hưởng.' }, { key: 'D', text: 'Làm cây xanh tốt.' }], correctAnswer: 'B', explanation: 'CO2 là sản phẩm, nồng độ cao ức chế phản ứng hô hấp.' },
        { id: 'b26-q4', difficulty: 'NB', question: 'Nhiệt độ tối ưu cho hô hấp tế bào ở đa số sinh vật là:', options: [{ key: 'A', text: '0 - 5 độ C.' }, { key: 'B', text: '25 - 35 độ C.' }, { key: 'C', text: '50 - 60 độ C.' }, { key: 'D', text: '100 độ C.' }], correctAnswer: 'B', explanation: 'Khoảng nhiệt độ thuận lợi cho enzyme hô hấp hoạt động.' },
        { id: 'b26-q5', difficulty: 'VD', question: 'Để bảo quản hạt giống (lúa, ngô), người ta dùng biện pháp:', options: [{ key: 'A', text: 'Ngâm nước.' }, { key: 'B', text: 'Phơi khô (làm giảm độ ẩm).' }, { key: 'C', text: 'Luộc chín.' }, { key: 'D', text: 'Để nơi ẩm ướt.' }], correctAnswer: 'B', explanation: 'Giảm nước để giảm hô hấp, giữ chất lượng hạt.' },
        { id: 'b26-q6', difficulty: 'VD', question: 'Bảo quản thực phẩm trong tủ lạnh dựa trên cơ sở:', options: [{ key: 'A', text: 'Nhiệt độ thấp ức chế hô hấp và vi sinh vật.' }, { key: 'B', text: 'Nhiệt độ thấp làm tăng hô hấp.' }, { key: 'C', text: 'Tủ lạnh có nhiều Oxygen.' }, { key: 'D', text: 'Tủ lạnh hút hết nước.' }], correctAnswer: 'A', explanation: 'Nhiệt độ thấp làm giảm cường độ hô hấp.' },
        { id: 'b26-q7', difficulty: 'VD', question: 'Hút chân không (loại bỏ không khí) giúp bảo quản thực phẩm vì:', options: [{ key: 'A', text: 'Loại bỏ CO2.' }, { key: 'B', text: 'Loại bỏ Oxygen, hạn chế hô hấp.' }, { key: 'C', text: 'Tăng nhiệt độ.' }, { key: 'D', text: 'Làm thực phẩm đẹp hơn.' }], correctAnswer: 'B', explanation: 'Thiếu O2, hô hấp hiếu khí bị ức chế.' },
        { id: 'b26-q8', difficulty: 'TH', question: 'Nồng độ Oxygen trong không khí giảm xuống dưới 5% thì:', options: [{ key: 'A', text: 'Hô hấp tăng.' }, { key: 'B', text: 'Hô hấp giảm mạnh.' }, { key: 'C', text: 'Cây quang hợp mạnh.' }, { key: 'D', text: 'Không ảnh hưởng.' }], correctAnswer: 'B', explanation: 'Oxygen là nguyên liệu, thiếu O2 hô hấp giảm.' },
        { id: 'b26-q9', difficulty: 'VD', question: 'Tại sao không nên để nhiều hoa hoặc cây xanh trong phòng ngủ kín vào ban đêm?', options: [{ key: 'A', text: 'Vì cây hô hấp lấy O2 và thải CO2 gây ngạt.' }, { key: 'B', text: 'Vì cây quang hợp tạo quá nhiều O2.' }, { key: 'C', text: 'Vì cây tỏa nhiệt nóng.' }, { key: 'D', text: 'Vì cây thu hút côn trùng.' }], correctAnswer: 'A', explanation: 'Ban đêm cây không quang hợp, chỉ hô hấp cạnh tranh O2 với người.' },
        { id: 'b26-q10', difficulty: 'VD', question: 'Biện pháp bơm khí Nitrogen (hoặc CO2) vào túi đựng thực phẩm nhằm:', options: [{ key: 'A', text: 'Tăng nồng độ O2.' }, { key: 'B', text: 'Giảm nồng độ O2, ức chế hô hấp.' }, { key: 'C', text: 'Tăng độ ẩm.' }, { key: 'D', text: 'Tăng nhiệt độ.' }], correctAnswer: 'B', explanation: 'Tạo môi trường khí quyển biến đổi để bảo quản.' }
      ],
      essay: [
        { id: 'b26-e1', difficulty: 'VD', question: 'Tại sao muốn bảo quản nông sản (rau, củ, quả, hạt) được lâu, ta cần khống chế hô hấp tế bào ở mức tối thiểu?', sampleAnswer: 'Hô hấp phân giải chất hữu cơ → làm hao hụt số lượng và chất lượng nông sản. Hô hấp tỏa nhiệt và tạo độ ẩm → tạo điều kiện cho vi khuẩn/nấm mốc phá hỏng nông sản. Do đó cần giảm hô hấp để giữ nông sản tươi lâu.' },
        { id: 'b26-e2', difficulty: 'VD', question: 'Kể tên các biện pháp bảo quản nông sản thường dùng và giải thích cơ sở khoa học của chúng.', sampleAnswer: 'Phơi khô: Giảm nước → giảm hô hấp. Bảo quản lạnh: Giảm nhiệt độ → ức chế enzyme hô hấp. Hút chân không/Bơm khí trơ: Giảm nồng độ O2 → hạn chế nguyên liệu hô hấp.' }
      ]
    }
  },
  {
    id: 'bai-28',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 28: Trao Đổi Khí Ở Sinh Vật',
    colorTheme: 'from-sky-500 to-cyan-500',
    objectives: ['Khái niệm trao đổi khí', 'Cơ chế khuếch tán', 'Trao đổi khí ở thực vật', 'Trao đổi khí ở động vật'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b28-q1', difficulty: 'NB', question: 'Trao đổi khí là quá trình:', options: [{ key: 'A', text: 'Lấy O2 từ môi trường vào cơ thể và thải CO2 ra ngoài.' }, { key: 'B', text: 'Lấy CO2 và thải O2.' }, { key: 'C', text: 'Chỉ lấy khí vào.' }, { key: 'D', text: 'Chỉ thải khí ra.' }], correctAnswer: 'A', explanation: 'Định nghĩa trao đổi khí (ở góc độ hô hấp).' },
        { id: 'b28-q2', difficulty: 'TH', question: 'Cơ chế chung của sự trao đổi khí là:', options: [{ key: 'A', text: 'Vận chuyển chủ động.' }, { key: 'B', text: 'Khuếch tán (từ nơi nồng độ cao đến nơi nồng độ thấp).' }, { key: 'C', text: 'Thẩm thấu.' }, { key: 'D', text: 'Thực bào.' }], correctAnswer: 'B', explanation: 'Khí di chuyển theo građien nồng độ.' },
        { id: 'b28-q3', difficulty: 'NB', question: 'Ở thực vật, trao đổi khí thực hiện chủ yếu qua:', options: [{ key: 'A', text: 'Lớp biểu bì.' }, { key: 'B', text: 'Khí khổng ở lá.' }, { key: 'C', text: 'Lông hút ở rễ.' }, { key: 'D', text: 'Mạch gỗ.' }], correctAnswer: 'B', explanation: 'Khí khổng đóng mở để khí O2, CO2 ra vào.' },
        { id: 'b28-q4', difficulty: 'NB', question: 'Cơ quan trao đổi khí của giun đất là:', options: [{ key: 'A', text: 'Phổi.' }, { key: 'B', text: 'Da.' }, { key: 'C', text: 'Mang.' }, { key: 'D', text: 'Ống khí.' }], correctAnswer: 'B', explanation: 'Giun đất trao đổi khí qua da ẩm ướt.' },
        { id: 'b28-q5', difficulty: 'NB', question: 'Cơ quan trao đổi khí của cá là:', options: [{ key: 'A', text: 'Phổi.' }, { key: 'B', text: 'Da.' }, { key: 'C', text: 'Mang.' }, { key: 'D', text: 'Hệ thống ống khí.' }], correctAnswer: 'C', explanation: 'Cá dùng mang để lấy O2 hòa tan trong nước.' },
        { id: 'b28-q6', difficulty: 'NB', question: 'Cơ quan trao đổi khí của côn trùng (châu chấu) là:', options: [{ key: 'A', text: 'Phổi.' }, { key: 'B', text: 'Hệ thống ống khí.' }, { key: 'C', text: 'Mang.' }, { key: 'D', text: 'Da.' }], correctAnswer: 'B', explanation: 'Côn trùng có hệ thống ống khí phân nhánh đến tận tế bào.' },
        { id: 'b28-q7', difficulty: 'NB', question: 'Loài động vật nào sau đây trao đổi khí bằng phổi?', options: [{ key: 'A', text: 'Cá chép.' }, { key: 'B', text: 'Giun đất.' }, { key: 'C', text: 'Chó, Mèo, Chim.' }, { key: 'D', text: 'Tôm.' }], correctAnswer: 'C', explanation: 'Thú, Chim, Bò sát trao đổi khí bằng phổi.' },
        { id: 'b28-q8', difficulty: 'TH', question: 'Trong quá trình quang hợp ở thực vật, sự trao đổi khí diễn ra như thế nào?', options: [{ key: 'A', text: 'Lấy O2, thải CO2.' }, { key: 'B', text: 'Lấy CO2, thải O2.' }, { key: 'C', text: 'Lấy cả O2 và CO2.' }, { key: 'D', text: 'Không trao đổi khí.' }], correctAnswer: 'B', explanation: 'Quang hợp cần CO2 làm nguyên liệu và thải O2.' },
        { id: 'b28-q9', difficulty: 'NB', question: 'Đường đi của khí ở hệ hô hấp người:', options: [{ key: 'A', text: 'Mũi → Hầu → Thanh quản → Khí quản → Phế quản → Phổi.' }, { key: 'B', text: 'Mũi → Phổi → Tim.' }, { key: 'C', text: 'Miệng → Dạ dày → Phổi.' }, { key: 'D', text: 'Mũi → Thực quản → Phổi.' }], correctAnswer: 'A', explanation: 'Sơ đồ hệ hô hấp người.' },
        { id: 'b28-q10', difficulty: 'VD', question: 'Tại sao khi trời mưa, giun đất thường chui lên mặt đất?', options: [{ key: 'A', text: 'Để tắm mưa.' }, { key: 'B', text: 'Để tìm thức ăn.' }, { key: 'C', text: 'Vì nước ngập đất làm giun ngạt thở (thiếu O2).' }, { key: 'D', text: 'Vì giun thích ánh sáng.' }], correctAnswer: 'C', explanation: 'Nước chiếm chỗ không khí trong đất, giun hô hấp qua da nên phải ngoi lên để thở.' }
      ],
      essay: [
        { id: 'b28-e1', difficulty: 'TH', question: 'Mô tả cấu tạo và chức năng của khí khổng ở thực vật.', sampleAnswer: 'Khí khổng gồm 2 tế bào hình hạt đậu úp vào nhau. Chức năng: Điều tiết sự thoát hơi nước và là cửa ngõ để khí CO2, O2 khuếch tán vào/ra lá.' },
        { id: 'b28-e2', difficulty: 'VD', question: 'Tại sao nuôi cá cảnh trong bể kính người ta thường thả thêm rong hoặc lắp máy sục khí?', sampleAnswer: 'Rong quang hợp thải khí O2. Máy sục khí giúp hòa tan O2 từ không khí vào nước. Cả hai đều giúp cung cấp đủ Oxygen cho cá hô hấp.' }
      ]
    }
  },
  {
    id: 'bai-29',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 29: Vai Trò Của Nước Và Chất Dinh Dưỡng',
    colorTheme: 'from-blue-400 to-cyan-400',
    objectives: ['Vai trò của nước', 'Tính phân cực của nước', 'Vai trò chất dinh dưỡng'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b29-q1', difficulty: 'NB', question: 'Nước chiếm khoảng bao nhiêu phần trăm khối lượng cơ thể sinh vật?', options: [{ key: 'A', text: '10 - 20%.' }, { key: 'B', text: '30 - 40%.' }, { key: 'C', text: '70 - 90%.' }, { key: 'D', text: '100%.' }], correctAnswer: 'C', explanation: 'Nước là thành phần chủ yếu của cơ thể.' },
        { id: 'b29-q2', difficulty: 'NB', question: 'Vai trò của nước đối với tế bào là:', options: [{ key: 'A', text: 'Dung môi hòa tan các chất.' }, { key: 'B', text: 'Môi trường cho các phản ứng hóa học.' }, { key: 'C', text: 'Điều hòa thân nhiệt.' }, { key: 'D', text: 'Tất cả các ý trên.' }], correctAnswer: 'D', explanation: 'Nước có vai trò cấu trúc, dung môi, điều hòa nhiệt.' },
        { id: 'b29-q3', difficulty: 'NB', question: 'Phân tử nước (H2O) được cấu tạo từ:', options: [{ key: 'A', text: '1 nguyên tử Hydrogen và 2 nguyên tử Oxygen.' }, { key: 'B', text: '2 nguyên tử Hydrogen và 1 nguyên tử Oxygen.' }, { key: 'C', text: '2 nguyên tử Carbon và 1 nguyên tử Oxygen.' }, { key: 'D', text: '1 nguyên tử Nitrogen và 1 nguyên tử Oxygen.' }], correctAnswer: 'B', explanation: 'Cấu tạo hóa học của nước là H2O.' },
        { id: 'b29-q4', difficulty: 'TH', question: 'Tính chất phân cực của nước giúp nó:', options: [{ key: 'A', text: 'Hòa tan được nhiều chất.' }, { key: 'B', text: 'Trở nên cứng hơn.' }, { key: 'C', text: 'Có màu xanh.' }, { key: 'D', text: 'Cháy được.' }], correctAnswer: 'A', explanation: 'Tính phân cực giúp nước là dung môi tốt.' },
        { id: 'b29-q5', difficulty: 'NB', question: 'Chất dinh dưỡng thiết yếu của thực vật là:', options: [{ key: 'A', text: 'Protein, Lipid.' }, { key: 'B', text: 'Nước và muối khoáng.' }, { key: 'C', text: 'Vitamin.' }, { key: 'D', text: 'Tinh bột có sẵn trong đất.' }], correctAnswer: 'B', explanation: 'Thực vật tự dưỡng, cần nước và khoáng (N, P, K...) từ đất.' },
        { id: 'b29-q6', difficulty: 'NB', question: 'Động vật lấy chất dinh dưỡng từ:', options: [{ key: 'A', text: 'Ánh sáng mặt trời.' }, { key: 'B', text: 'Thức ăn (thực vật hoặc động vật khác).' }, { key: 'C', text: 'Tự tổng hợp từ nước.' }, { key: 'D', text: 'Không khí.' }], correctAnswer: 'B', explanation: 'Động vật là sinh vật dị dưỡng.' },
        { id: 'b29-q7', difficulty: 'TH', question: 'Thiếu nước, cây sẽ:', options: [{ key: 'A', text: 'Héo, quang hợp giảm, có thể chết.' }, { key: 'B', text: 'Lớn nhanh hơn.' }, { key: 'C', text: 'Ra hoa sớm.' }, { key: 'D', text: 'Không ảnh hưởng gì.' }], correctAnswer: 'A', explanation: 'Mất cân bằng nước làm tế bào mất sức trương.' },
        { id: 'b29-q8', difficulty: 'TH', question: 'Nguyên tố khoáng nào tham gia cấu tạo nên diệp lục?', options: [{ key: 'A', text: 'Calcium (Ca).' }, { key: 'B', text: 'Magnesium (Mg).' }, { key: 'C', text: 'Iron (Fe).' }, { key: 'D', text: 'Potassium (K).' }], correctAnswer: 'B', explanation: 'Mg là thành phần trung tâm của diệp lục.' },
        { id: 'b29-q9', difficulty: 'VD', question: 'Vai trò của Iodine (I) đối với con người:', options: [{ key: 'A', text: 'Cấu tạo xương.' }, { key: 'B', text: 'Phòng bệnh bướu cổ.' }, { key: 'C', text: 'Tăng cường thị lực.' }, { key: 'D', text: 'Làm đẹp da.' }], correctAnswer: 'B', explanation: 'Thiếu Iodine gây bướu cổ.' },
        { id: 'b29-q10', difficulty: 'NB', question: 'Chất dinh dưỡng nào cung cấp năng lượng chủ yếu cho động vật?', options: [{ key: 'A', text: 'Vitamin.' }, { key: 'B', text: 'Carbohydrate (Chất đường bột).' }, { key: 'C', text: 'Nước.' }, { key: 'D', text: 'Muối khoáng.' }], correctAnswer: 'B', explanation: 'Carbohydrate là nguồn năng lượng chính.' }
      ],
      essay: [
        { id: 'b29-e1', difficulty: 'VD', question: 'Tại sao khi bị sốt cao hoặc tiêu chảy, bác sĩ thường khuyên uống dung dịch Oresol?', sampleAnswer: 'Khi sốt/tiêu chảy, cơ thể mất nhiều nước và muối khoáng. Oresol giúp bù lại lượng nước và khoáng chất đã mất, giúp phục hồi cân bằng nội môi.' },
        { id: 'b29-e2', difficulty: 'TH', question: 'Nêu vai trò của chất dinh dưỡng đối với sinh vật. Cho ví dụ về một loại phân bón và tác dụng của nó.', sampleAnswer: 'Vai trò: Cung cấp nguyên liệu cấu tạo cơ thể và cung cấp năng lượng cho hoạt động sống. Ví dụ: Phân Đạm (chứa Nitrogen) giúp cây sinh trưởng nhanh, ra nhiều lá.' }
      ]
    }
  },
  {
    id: 'bai-30',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 30: Trao Đổi Nước Và Dinh Dưỡng Ở Thực Vật',
    colorTheme: 'from-lime-600 to-green-600',
    objectives: ['Hấp thụ nước và khoáng', 'Mạch gỗ, mạch rây', 'Thoát hơi nước', 'Khí khổng'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b30-q1', difficulty: 'NB', question: 'Cây hút nước và muối khoáng chủ yếu qua bộ phận nào?', options: [{ key: 'A', text: 'Lá.' }, { key: 'B', text: 'Thân.' }, { key: 'C', text: 'Lông hút ở rễ.' }, { key: 'D', text: 'Hoa.' }], correctAnswer: 'C', explanation: 'Tế bào lông hút hấp thụ nước và khoáng từ đất.' },
        { id: 'b30-q2', difficulty: 'NB', question: 'Mạch gỗ có chức năng:', options: [{ key: 'A', text: 'Vận chuyển chất hữu cơ từ lá xuống rễ.' }, { key: 'B', text: 'Vận chuyển nước và muối khoáng từ rễ lên thân, lá.' }, { key: 'C', text: 'Vận chuyển khí.' }, { key: 'D', text: 'Dự trữ dinh dưỡng.' }], correctAnswer: 'B', explanation: 'Dòng đi lên (Nước + Khoáng) là mạch gỗ.' },
        { id: 'b30-q3', difficulty: 'NB', question: 'Mạch rây có chức năng:', options: [{ key: 'A', text: 'Vận chuyển nước từ rễ lên.' }, { key: 'B', text: 'Vận chuyển chất hữu cơ từ lá đến các bộ phận khác.' }, { key: 'C', text: 'Hút nước.' }, { key: 'D', text: 'Thoát hơi nước.' }], correctAnswer: 'B', explanation: 'Dòng đi xuống (Chất hữu cơ) là mạch rây.' },
        { id: 'b30-q4', difficulty: 'TH', question: 'Động lực chính giúp dòng nước di chuyển từ rễ lên lá là:', options: [{ key: 'A', text: 'Lực đẩy của rễ.' }, { key: 'B', text: 'Lực hút do thoát hơi nước ở lá.' }, { key: 'C', text: 'Lực liên kết giữa các phân tử nước.' }, { key: 'D', text: 'Cả 3 lực trên (trong đó thoát hơi nước là chủ yếu).' }], correctAnswer: 'D', explanation: 'Thoát hơi nước tạo lực hút đầu trên.' },
        { id: 'b30-q5', difficulty: 'NB', question: 'Thoát hơi nước diễn ra chủ yếu qua:', options: [{ key: 'A', text: 'Lớp cutin.' }, { key: 'B', text: 'Khí khổng ở lá.' }, { key: 'C', text: 'Thân cây.' }, { key: 'D', text: 'Rễ cây.' }], correctAnswer: 'B', explanation: 'Khoảng 90% nước thoát qua khí khổng.' },
        { id: 'b30-q6', difficulty: 'TH', question: 'Vai trò của thoát hơi nước:', options: [{ key: 'A', text: 'Tạo lực hút nước.' }, { key: 'B', text: 'Hạ nhiệt độ của lá.' }, { key: 'C', text: 'Giúp khí CO2 đi vào lá để quang hợp.' }, { key: 'D', text: 'Tất cả các ý trên.' }], correctAnswer: 'D', explanation: 'Vai trò quan trọng của thoát hơi nước.' },
        { id: 'b30-q7', difficulty: 'VD', question: 'Khi nào cây thoát hơi nước nhiều nhất?', options: [{ key: 'A', text: 'Ban đêm.' }, { key: 'B', text: 'Ban ngày, trời nắng, khô hanh, có gió.' }, { key: 'C', text: 'Khi trời mưa.' }, { key: 'D', text: 'Khi cây rụng hết lá.' }], correctAnswer: 'B', explanation: 'Điều kiện môi trường khô nóng làm tăng thoát hơi nước.' },
        { id: 'b30-q8', difficulty: 'VD', question: 'Tại sao khi bứng cây đi trồng nơi khác, người ta thường cắt bớt lá?', options: [{ key: 'A', text: 'Để cây nhẹ hơn.' }, { key: 'B', text: 'Để giảm thoát hơi nước, tránh cho cây bị héo.' }, { key: 'C', text: 'Để kích thích ra rễ.' }, { key: 'D', text: 'Để cây đẹp hơn.' }], correctAnswer: 'B', explanation: 'Rễ bị tổn thương hút nước kém, cần cắt lá để giảm thoát nước.' },
        { id: 'b30-q9', difficulty: 'NB', question: 'Dòng mạch gỗ gồm các tế bào:', options: [{ key: 'A', text: 'Sống.' }, { key: 'B', text: 'Chết (hóa gỗ).' }, { key: 'C', text: 'Tế bào biểu bì.' }, { key: 'D', text: 'Tế bào thịt lá.' }], correctAnswer: 'B', explanation: 'Mạch gỗ là các tế bào chết tạo thành ống rỗng.' },
        { id: 'b30-q10', difficulty: 'TH', question: 'Yếu tố nào ảnh hưởng đến sự đóng mở khí khổng?', options: [{ key: 'A', text: 'Ánh sáng và lượng nước trong cây.' }, { key: 'B', text: 'Tiếng ồn.' }, { key: 'C', text: 'Màu sắc của lá.' }, { key: 'D', text: 'Độ pH đất.' }], correctAnswer: 'A', explanation: 'Khi cây đủ nước và có ánh sáng, khí khổng mở.' }
      ],
      essay: [
        { id: 'b30-e1', difficulty: 'TH', question: 'Trình bày con đường đi của nước từ đất vào cây.', sampleAnswer: 'Nước từ đất → Lông hút → Vỏ rễ → Mạch gỗ của rễ → Mạch gỗ của thân → Mạch gỗ của lá → Tế bào thịt lá → Thoát ra ngoài qua khí khổng.' },
        { id: 'b30-e2', difficulty: 'VD', question: 'Tại sao vào những ngày nắng nóng, đứng dưới bóng cây to lại thấy mát hơn đứng dưới mái tôn?', sampleAnswer: 'Cây chắn ánh sáng mặt trời. Quan trọng hơn: Cây thoát hơi nước. Quá trình bay hơi nước lấy đi nhiệt lượng từ môi trường xung quanh, làm không khí dưới tán cây mát mẻ hơn (giống cơ chế toát mồ hôi làm mát).' }
      ]
    }
  },
  {
    id: 'bai-31',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 31: Trao Đổi Nước Và Dinh Dưỡng Ở Động Vật',
    colorTheme: 'from-rose-400 to-pink-500',
    objectives: ['Tiêu hóa', 'Tuần hoàn', 'Bài tiết', 'Vận chuyển các chất'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b31-q1', difficulty: 'NB', question: 'Cơ quan chính thực hiện quá trình tiêu hóa và hấp thụ thức ăn ở người là:', options: [{ key: 'A', text: 'Hệ hô hấp.' }, { key: 'B', text: 'Hệ tiêu hóa.' }, { key: 'C', text: 'Hệ tuần hoàn.' }, { key: 'D', text: 'Hệ bài tiết.' }], correctAnswer: 'B', explanation: 'Hệ tiêu hóa biến đổi thức ăn thành chất dinh dưỡng.' },
        { id: 'b31-q2', difficulty: 'NB', question: 'Nước và chất dinh dưỡng được vận chuyển đến các tế bào nhờ:', options: [{ key: 'A', text: 'Hệ tiêu hóa.' }, { key: 'B', text: 'Hệ tuần hoàn (máu).' }, { key: 'C', text: 'Hệ thần kinh.' }, { key: 'D', text: 'Hệ hô hấp.' }], correctAnswer: 'B', explanation: 'Hệ tuần hoàn vận chuyển chất đi khắp cơ thể.' },
        { id: 'b31-q3', difficulty: 'NB', question: 'Cơ quan nào lọc máu để tạo thành nước tiểu?', options: [{ key: 'A', text: 'Tim.' }, { key: 'B', text: 'Gan.' }, { key: 'C', text: 'Thận.' }, { key: 'D', text: 'Dạ dày.' }], correctAnswer: 'C', explanation: 'Thận lọc chất thải từ máu tạo nước tiểu.' },
        { id: 'b31-q4', difficulty: 'NB', question: 'Quá trình tiêu hóa thức ăn gồm các giai đoạn:', options: [{ key: 'A', text: 'Ăn → Tiêu hóa → Hấp thụ → Thải phân.' }, { key: 'B', text: 'Ăn → Thải phân.' }, { key: 'C', text: 'Hô hấp → Tiêu hóa.' }, { key: 'D', text: 'Uống nước → Bài tiết.' }], correctAnswer: 'A', explanation: 'Quy trình xử lý thức ăn trong ống tiêu hóa.' },
        { id: 'b31-q5', difficulty: 'NB', question: 'Ở người, chất dinh dưỡng được hấp thụ chủ yếu ở đâu?', options: [{ key: 'A', text: 'Dạ dày.' }, { key: 'B', text: 'Ruột non.' }, { key: 'C', text: 'Ruột già.' }, { key: 'D', text: 'Thực quản.' }], correctAnswer: 'B', explanation: 'Ruột non có cấu tạo chuyên biệt để hấp thu chất dinh dưỡng.' },
        { id: 'b31-q6', difficulty: 'NB', question: 'Hệ tuần hoàn ở người gồm:', options: [{ key: 'A', text: 'Tim và hệ mạch máu (động mạch, tĩnh mạch, mao mạch).' }, { key: 'B', text: 'Tim và phổi.' }, { key: 'C', text: 'Máu và nước tiểu.' }, { key: 'D', text: 'Dạ dày và ruột.' }], correctAnswer: 'A', explanation: 'Cấu tạo hệ tuần hoàn.' },
        { id: 'b31-q7', difficulty: 'TH', question: 'Máu vận chuyển chất gì?', options: [{ key: 'A', text: 'Chất dinh dưỡng và Oxygen đến tế bào.' }, { key: 'B', text: 'Chất thải và CO2 từ tế bào đi.' }, { key: 'C', text: 'Hormone và kháng thể.' }, { key: 'D', text: 'Tất cả các ý trên.' }], correctAnswer: 'D', explanation: 'Chức năng vận chuyển của máu.' },
        { id: 'b31-q8', difficulty: 'TH', question: 'Nhu cầu nước của động vật phụ thuộc vào:', options: [{ key: 'A', text: 'Loài, kích thước cơ thể.' }, { key: 'B', text: 'Độ tuổi, thức ăn.' }, { key: 'C', text: 'Nhiệt độ môi trường, cường độ hoạt động.' }, { key: 'D', text: 'Tất cả các yếu tố trên.' }], correctAnswer: 'D', explanation: 'Nhu cầu nước thay đổi tùy điều kiện.' },
        { id: 'b31-q9', difficulty: 'VD', question: 'Để bảo vệ hệ tiêu hóa, chúng ta cần:', options: [{ key: 'A', text: 'Ăn chín, uống sôi, rửa tay trước khi ăn.' }, { key: 'B', text: 'Ăn thật nhanh.' }, { key: 'C', text: 'Vừa ăn vừa xem tivi.' }, { key: 'D', text: 'Ăn nhiều đồ chiên rán.' }], correctAnswer: 'A', explanation: 'Biện pháp vệ sinh an toàn thực phẩm.' },
        { id: 'b31-q10', difficulty: 'NB', question: 'Con đường thu nhận nước chủ yếu của động vật là:', options: [{ key: 'A', text: 'Qua thức ăn và nước uống.' }, { key: 'B', text: 'Qua da.' }, { key: 'C', text: 'Qua hô hấp.' }, { key: 'D', text: 'Tự tổng hợp.' }], correctAnswer: 'A', explanation: 'Động vật uống nước và lấy nước trong thức ăn.' }
      ],
      essay: [
        { id: 'b31-e1', difficulty: 'TH', question: 'Mô tả con đường vận chuyển các chất trong cơ thể người.', sampleAnswer: 'Thức ăn → Hệ tiêu hóa (biến đổi thành chất dinh dưỡng) → Hấp thụ vào Máu (Hệ tuần hoàn) → Tim bơm máu đến Tế bào (cung cấp chất dinh dưỡng + O2). Chất thải từ Tế bào → Máu → Phổi (thải CO2) / Thận (thải nước tiểu) / Da (thải mồ hôi).' },
        { id: 'b31-e2', difficulty: 'VD', question: 'Tại sao cần ăn uống đủ chất và uống đủ nước?', sampleAnswer: 'Để cung cấp đủ nguyên liệu và năng lượng cho cơ thể sinh trưởng, phát triển và hoạt động. Nước giúp duy trì cân bằng nội môi, hòa tan và vận chuyển chất, điều hòa thân nhiệt.' }
      ]
    }
  },
  {
    id: 'bai-33',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 33: Cảm Ứng Ở Sinh Vật Và Tập Tính',
    colorTheme: 'from-amber-600 to-yellow-600',
    objectives: ['Khái niệm cảm ứng', 'Tập tính bẩm sinh và học được', 'Vai trò của tập tính'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b33-q1', difficulty: 'NB', question: 'Cảm ứng ở sinh vật là gì?', options: [{ key: 'A', text: 'Khả năng lớn lên của sinh vật.' }, { key: 'B', text: 'Khả năng tiếp nhận và phản ứng lại các kích thích từ môi trường.' }, { key: 'C', text: 'Khả năng sinh sản tạo ra thế hệ mới.' }, { key: 'D', text: 'Khả năng trao đổi chất với môi trường.' }], correctAnswer: 'B', explanation: 'Định nghĩa cảm ứng là phản ứng của sinh vật đối với kích thích.' },
        { id: 'b33-q2', difficulty: 'NB', question: 'Ngọn cây luôn vươn về phía có ánh sáng là ví dụ của:', options: [{ key: 'A', text: 'Tính hướng nước.' }, { key: 'B', text: 'Tính hướng đất.' }, { key: 'C', text: 'Tính hướng sáng.' }, { key: 'D', text: 'Tính hướng tiếp xúc.' }], correctAnswer: 'C', explanation: 'Phản ứng của cây đối với ánh sáng chiếu từ một phía.' },
        { id: 'b33-q3', difficulty: 'NB', question: 'Tập tính bẩm sinh ở động vật có đặc điểm:', options: [{ key: 'A', text: 'Sinh ra đã có, mang tính bản năng, di truyền.' }, { key: 'B', text: 'Phải học tập mới biết.' }, { key: 'C', text: 'Dễ thay đổi theo môi trường.' }, { key: 'D', text: 'Chỉ có ở con người.' }], correctAnswer: 'A', explanation: 'Tập tính bẩm sinh sinh ra đã có, đặc trưng cho loài.' },
        { id: 'b33-q4', difficulty: 'TH', question: 'Ví dụ nào sau đây là tập tính học được?', options: [{ key: 'A', text: 'Nhện giăng tơ.' }, { key: 'B', text: 'Gà con mổ thức ăn.' }, { key: 'C', text: 'Chó nghe hiệu lệnh nằm xuống.' }, { key: 'D', text: 'Ếch kêu sau cơn mưa.' }], correctAnswer: 'C', explanation: 'Đây là tập tính hình thành qua quá trình huấn luyện (học tập).' },
        { id: 'b33-q5', difficulty: 'NB', question: 'Rễ cây có tính hướng gì?', options: [{ key: 'A', text: 'Hướng sáng dương và hướng đất âm.' }, { key: 'B', text: 'Hướng đất dương và hướng nước.' }, { key: 'C', text: 'Tránh xa nguồn nước.' }, { key: 'D', text: 'Hướng sáng dương.' }], correctAnswer: 'B', explanation: 'Rễ cây mọc sâu xuống đất (hướng đất) và tìm nguồn nước (hướng nước).' },
        { id: 'b33-q6', difficulty: 'NB', question: 'Tập tính động vật có vai trò gì?', options: [{ key: 'A', text: 'Giúp sinh vật thích nghi, tồn tại và phát triển.' }, { key: 'B', text: 'Làm sinh vật tiêu tốn năng lượng vô ích.' }, { key: 'C', text: 'Chỉ để giải trí.' }, { key: 'D', text: 'Không có vai trò quan trọng.' }], correctAnswer: 'A', explanation: 'Giúp tìm thức ăn, bảo vệ lãnh thổ, sinh sản...' },
        { id: 'b33-q7', difficulty: 'TH', question: 'Hiện tượng cây trinh nữ cụp lá khi chạm vào là:', options: [{ key: 'A', text: 'Hướng động.' }, { key: 'B', text: 'Ứng động (cảm ứng không định hướng).' }, { key: 'C', text: 'Tập tính học được.' }, { key: 'D', text: 'Sinh trưởng.' }], correctAnswer: 'B', explanation: 'Phản ứng nhanh không phụ thuộc hướng kích thích.' },
        { id: 'b33-q8', difficulty: 'TH', question: 'Chim di cư tránh rét là tập tính:', options: [{ key: 'A', text: 'Kiếm ăn.' }, { key: 'B', text: 'Sinh sản.' }, { key: 'C', text: 'Bảo vệ lãnh thổ.' }, { key: 'D', text: 'Thích nghi với môi trường (di cư).' }], correctAnswer: 'D', explanation: 'Di cư để tránh điều kiện khắc nghiệt.' },
        { id: 'b33-q9', difficulty: 'TH', question: 'Tập tính bảo vệ lãnh thổ thường thấy ở:', options: [{ key: 'A', text: 'Chó sói đánh dấu lãnh thổ bằng nước tiểu.' }, { key: 'B', text: 'Cá heo bơi theo đàn.' }, { key: 'C', text: 'Ong hút mật.' }, { key: 'D', text: 'Mèo ngủ nướng.' }], correctAnswer: 'A', explanation: 'Đánh dấu để xua đuổi kẻ xâm nhập.' },
        { id: 'b33-q10', difficulty: 'NB', question: 'Cơ sở thần kinh của tập tính là:', options: [{ key: 'A', text: 'Các phản xạ.' }, { key: 'B', text: 'Sự phân chia tế bào.' }, { key: 'C', text: 'Sự trao đổi chất.' }, { key: 'D', text: 'Sự quang hợp.' }], correctAnswer: 'A', explanation: 'Tập tính là chuỗi phản xạ trả lời kích thích.' }
      ],
      essay: [
        { id: 'b33-e1', difficulty: 'TH', question: 'Phân biệt tập tính bẩm sinh và tập tính học được. Cho 2 ví dụ mỗi loại.', sampleAnswer: 'Tập tính bẩm sinh: Sinh ra đã có, bền vững, di truyền (VD: Nhện giăng tơ, thú non bú mẹ). Tập tính học được: Hình thành do học tập, dễ thay đổi, không di truyền (VD: Khỉ đi xe đạp, người dừng đèn đỏ).' },
        { id: 'b33-e2', difficulty: 'VD', question: 'Tại sao người ta làm giàn cho cây mướp, bầu, bí? Đây là ứng dụng của hiện tượng gì?', sampleAnswer: 'Ứng dụng tính hướng tiếp xúc. Các loài cây leo có tua cuốn, khi tiếp xúc với cọc/giàn sẽ quấn quanh để vươn lên đón ánh sáng.' }
      ]
    }
  },
  {
    id: 'bai-34',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 34: Ứng Dụng Cảm Ứng Ở Sinh Vật',
    colorTheme: 'from-orange-500 to-red-500',
    objectives: ['Ứng dụng trong trồng trọt', 'Ứng dụng trong chăn nuôi', 'Tập tính và đời sống'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b34-q1', difficulty: 'NB', question: 'Trong trồng trọt, người ta vun gốc cho cây khoai tây là ứng dụng tính chất gì?', options: [{ key: 'A', text: 'Hướng sáng.' }, { key: 'B', text: 'Hướng đất và tránh ánh sáng của củ.' }, { key: 'C', text: 'Hướng nước.' }, { key: 'D', text: 'Hướng gió.' }], correctAnswer: 'B', explanation: 'Củ khoai tây cần bóng tối để phát triển, gặp ánh sáng sẽ bị xanh vỏ.' },
        { id: 'b34-q2', difficulty: 'TH', question: 'Dùng đèn bẫy côn trùng là dựa vào tập tính nào?', options: [{ key: 'A', text: 'Tính hướng sáng dương của côn trùng.' }, { key: 'B', text: 'Tính sợ ánh sáng.' }, { key: 'C', text: 'Tính hướng hóa.' }, { key: 'D', text: 'Tập tính sinh sản.' }], correctAnswer: 'A', explanation: 'Nhiều côn trùng bị thu hút bởi ánh sáng ban đêm.' },
        { id: 'b34-q3', difficulty: 'TH', question: 'Huấn luyện chó nghiệp vụ dựa trên cơ sở:', options: [{ key: 'A', text: 'Tập tính bẩm sinh.' }, { key: 'B', text: 'Hình thành tập tính học được (phản xạ có điều kiện).' }, { key: 'C', text: 'Thay đổi gen.' }, { key: 'D', text: 'Cho ăn nhiều.' }], correctAnswer: 'B', explanation: 'Lặp lại huấn luyện để hình thành thói quen.' },
        { id: 'b34-q4', difficulty: 'VD', question: 'Làm bù nhìn rơm ở ruộng lúa nhằm:', options: [{ key: 'A', text: 'Trang trí.' }, { key: 'B', text: 'Xua đuổi chim phá hoại mùa màng.' }, { key: 'C', text: 'Thu hút sâu bọ.' }, { key: 'D', text: 'Che nắng cho lúa.' }], correctAnswer: 'B', explanation: 'Dựa vào tập tính sợ người của chim.' },
        { id: 'b34-q5', difficulty: 'VD', question: 'Gõ kẻng để gọi cá đến ăn là ứng dụng:', options: [{ key: 'A', text: 'Tập tính bẩm sinh.' }, { key: 'B', text: 'Tập tính học được.' }, { key: 'C', text: 'Cảm ứng ở thực vật.' }, { key: 'D', text: 'Bản năng sinh tồn.' }], correctAnswer: 'B', explanation: 'Cá học được sự liên kết giữa tiếng kẻng và thức ăn.' },
        { id: 'b34-q6', difficulty: 'TH', question: 'Để diệt sâu bọ hại cây, người ta có thể dùng:', options: [{ key: 'A', text: 'Bẫy đèn.' }, { key: 'B', text: 'Pheromone (chất dẫn dụ).' }, { key: 'C', text: 'Thiên địch.' }, { key: 'D', text: 'Tất cả các ý trên.' }], correctAnswer: 'D', explanation: 'Vận dụng các tập tính hướng sáng, hướng hóa và chuỗi thức ăn.' },
        { id: 'b34-q7', difficulty: 'NB', question: 'Việc làm giàn cho cây thiên lý dựa trên:', options: [{ key: 'A', text: 'Hướng tiếp xúc.' }, { key: 'B', text: 'Hướng nước.' }, { key: 'C', text: 'Hướng hóa.' }, { key: 'D', text: 'Hướng đất.' }], correctAnswer: 'A', explanation: 'Giúp cây leo bám và vươn lên.' },
        { id: 'b34-q8', difficulty: 'TH', question: 'Tưới nước vào rãnh xung quanh gốc cây giúp:', options: [{ key: 'A', text: 'Rễ cây lan rộng, vươn xa tìm nguồn nước.' }, { key: 'B', text: 'Rễ cây thu gọn lại.' }, { key: 'C', text: 'Cây không bị ngập úng.' }, { key: 'D', text: 'Cây quang hợp tốt hơn.' }], correctAnswer: 'A', explanation: 'Kích thích rễ phát triển theo hướng có nguồn nước (hướng nước).' },
        { id: 'b34-q9', difficulty: 'NB', question: 'Dạy trẻ em thói quen đánh răng rửa mặt là:', options: [{ key: 'A', text: 'Hình thành tập tính học được.' }, { key: 'B', text: 'Tập tính bẩm sinh.' }, { key: 'C', text: 'Không cần thiết.' }, { key: 'D', text: 'Bản năng.' }], correctAnswer: 'A', explanation: 'Thói quen tốt được hình thành qua rèn luyện.' },
        { id: 'b34-q10', difficulty: 'TH', question: 'Tại sao nên trồng cây với mật độ thích hợp?', options: [{ key: 'A', text: 'Để tận dụng đất.' }, { key: 'B', text: 'Để cây không cạnh tranh ánh sáng, dinh dưỡng (tránh hiện tượng hướng sáng vươn quá cao gây yếu cây).' }, { key: 'C', text: 'Để dễ tưới nước.' }, { key: 'D', text: 'Để đẹp mắt.' }], correctAnswer: 'B', explanation: 'Cây trồng dày quá sẽ vươn cao (hướng sáng) nhưng thân yếu, dễ đổ.' }
      ],
      essay: [
        { id: 'b34-e1', difficulty: 'VD', question: 'Nêu 3 ví dụ về việc ứng dụng tập tính động vật trong chăn nuôi và bảo vệ mùa màng.', sampleAnswer: '(1) Nghe tiếng kẻng trâu bò về chuồng. (2) Dùng đèn bẫy bướm hại lúa. (3) Dùng thiên địch (ong mắt đỏ) diệt sâu hại.' },
        { id: 'b34-e2', difficulty: 'VD', question: 'Tại sao người ta thường dùng trâu, bò để cày kéo? Việc này dựa trên cơ sở nào?', sampleAnswer: 'Dựa trên khả năng hình thành tập tính học được của trâu bò. Qua huấn luyện, chúng biết nghe hiệu lệnh của người điều khiển để rẽ trái, phải, dừng lại...' }
      ]
    }
  },
  {
    id: 'bai-36',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 36: Khái Quát Về Sinh Trưởng Và Phát Triển',
    colorTheme: 'from-lime-500 to-green-600',
    objectives: ['Khái niệm sinh trưởng', 'Khái niệm phát triển', 'Mô phân sinh', 'Biến thái ở động vật'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b36-q1', difficulty: 'NB', question: 'Sinh trưởng là gì?', options: [{ key: 'A', text: 'Sự tăng lên về kích thước và khối lượng cơ thể.' }, { key: 'B', text: 'Sự biến đổi về hình thái.' }, { key: 'C', text: 'Sự ra hoa kết quả.' }, { key: 'D', text: 'Sự phát sinh giao tử.' }], correctAnswer: 'A', explanation: 'Do tăng số lượng và kích thước tế bào.' },
        { id: 'b36-q2', difficulty: 'NB', question: 'Phát triển bao gồm các quá trình nào?', options: [{ key: 'A', text: 'Sinh trưởng, phân hóa tế bào, phát sinh hình thái cơ quan.' }, { key: 'B', text: 'Chỉ sinh trưởng.' }, { key: 'C', text: 'Chỉ sinh sản.' }, { key: 'D', text: 'Lớn lên và già đi.' }], correctAnswer: 'A', explanation: 'Phát triển là quá trình biến đổi bao gồm cả sinh trưởng và phân hóa.' },
        { id: 'b36-q3', difficulty: 'NB', question: 'Mô phân sinh là gì?', options: [{ key: 'A', text: 'Nhóm tế bào đã chuyên hóa.' }, { key: 'B', text: 'Nhóm tế bào chưa phân hóa, duy trì khả năng nguyên phân.' }, { key: 'C', text: 'Nhóm tế bào chết.' }, { key: 'D', text: 'Vỏ cây.' }], correctAnswer: 'B', explanation: 'Giúp cây sinh trưởng.' },
        { id: 'b36-q4', difficulty: 'NB', question: 'Cây Hai lá mầm (như cây cam) có các loại mô phân sinh nào?', options: [{ key: 'A', text: 'Đỉnh và lóng.' }, { key: 'B', text: 'Đỉnh và bên.' }, { key: 'C', text: 'Chỉ có mô phân sinh đỉnh.' }, { key: 'D', text: 'Chỉ có mô phân sinh bên.' }], correctAnswer: 'B', explanation: 'Mô phân sinh đỉnh (giúp cao lên), mô phân sinh bên (giúp to ra).' },
        { id: 'b36-q5', difficulty: 'NB', question: 'Mô phân sinh lóng thường gặp ở loài cây nào?', options: [{ key: 'A', text: 'Cây Một lá mầm (Lúa, Tre, Mía).' }, { key: 'B', text: 'Cây Hai lá mầm (Đậu, Cam).' }, { key: 'C', text: 'Cây hạt trần.' }, { key: 'D', text: 'Rêu.' }], correctAnswer: 'A', explanation: 'Giúp lóng cây dài ra.' },
        { id: 'b36-q6', difficulty: 'NB', question: 'Vòng đời của ếch trải qua giai đoạn biến thái:', options: [{ key: 'A', text: 'Hoàn toàn.' }, { key: 'B', text: 'Không hoàn toàn.' }, { key: 'C', text: 'Không biến thái.' }, { key: 'D', text: 'Trực tiếp.' }], correctAnswer: 'A', explanation: 'Trứng -> Nòng nọc (khác hẳn ếch) -> Ếch trưởng thành.' },
        { id: 'b36-q7', difficulty: 'NB', question: 'Động vật nào sau đây phát triển không qua biến thái?', options: [{ key: 'A', text: 'Bướm.' }, { key: 'B', text: 'Ếch.' }, { key: 'C', text: 'Con người, Chó, Mèo.' }, { key: 'D', text: 'Châu chấu.' }], correctAnswer: 'C', explanation: 'Con non sinh ra có hình thái giống con trưởng thành.' },
        { id: 'b36-q8', difficulty: 'NB', question: 'Dấu hiệu đặc trưng của sinh trưởng ở thực vật là:', options: [{ key: 'A', text: 'Ra hoa.' }, { key: 'B', text: 'Tăng chiều cao, đường kính thân.' }, { key: 'C', text: 'Rụng lá.' }, { key: 'D', text: 'Nảy mầm.' }], correctAnswer: 'B', explanation: 'Biểu hiện của tăng kích thước.' },
        { id: 'b36-q9', difficulty: 'TH', question: 'Vòng đời của bướm tằm:', options: [{ key: 'A', text: 'Trứng -> Sâu bướm -> Nhộng -> Bướm trưởng thành.' }, { key: 'B', text: 'Trứng -> Bướm con -> Bướm trưởng thành.' }, { key: 'C', text: 'Sâu -> Bướm.' }, { key: 'D', text: 'Trứng -> Nhộng -> Sâu.' }], correctAnswer: 'A', explanation: 'Biến thái hoàn toàn.' },
        { id: 'b36-q10', difficulty: 'TH', question: 'Sinh trưởng và phát triển có mối quan hệ:', options: [{ key: 'A', text: 'Độc lập.' }, { key: 'B', text: 'Mật thiết, gắn bó với nhau.' }, { key: 'C', text: 'Đối kháng.' }, { key: 'D', text: 'Không liên quan.' }], correctAnswer: 'B', explanation: 'Sinh trưởng là tiền đề của phát triển, phát triển thúc đẩy sinh trưởng.' }
      ],
      essay: [
        { id: 'b36-e1', difficulty: 'TH', question: 'Phân biệt phát triển qua biến thái và không qua biến thái.', sampleAnswer: 'Không qua biến thái: Con non có hình thái, cấu tạo tương tự con trưởng thành (VD: Người, gà). Qua biến thái: Con non có hình thái, cấu tạo khác biệt với con trưởng thành, phải qua lột xác hoặc giai đoạn trung gian mới thành con trưởng thành (VD: Ếch, Bướm).' },
        { id: 'b36-e2', difficulty: 'VD', question: 'Vẽ sơ đồ vòng đời của cây cam.', sampleAnswer: 'Hạt → Nảy mầm → Cây non → Cây trưởng thành → Ra hoa → Kết quả/Tạo hạt → Già/Chết.' }
      ]
    }
  },
  {
    id: 'bai-37',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 37: Ứng Dụng Sinh Trưởng Và Phát Triển',
    colorTheme: 'from-green-700 to-emerald-700',
    objectives: ['Điều khiển sinh trưởng thực vật', 'Điều khiển sinh trưởng động vật', 'Chất kích thích và ức chế'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b37-q1', difficulty: 'NB', question: 'Yếu tố bên ngoài nào ảnh hưởng đến sinh trưởng của cây?', options: [{ key: 'A', text: 'Nhiệt độ, ánh sáng, nước, dinh dưỡng.' }, { key: 'B', text: 'Hormone.' }, { key: 'C', text: 'Di truyền.' }, { key: 'D', text: 'Giống.' }], correctAnswer: 'A', explanation: 'Các nhân tố môi trường.' },
        { id: 'b37-q2', difficulty: 'TH', question: 'Để cây trồng năng suất cao cần:', options: [{ key: 'A', text: 'Bón phân, tưới nước hợp lí, chiếu sáng phù hợp.' }, { key: 'B', text: 'Không bón phân.' }, { key: 'C', text: 'Trồng mật độ dày đặc.' }, { key: 'D', text: 'Để mặc tự nhiên.' }], correctAnswer: 'A', explanation: 'Điều khiển các yếu tố ngoại cảnh tối ưu.' },
        { id: 'b37-q3', difficulty: 'VD', question: 'Vào mùa đông, người ta thường thắp đèn cho hoa cúc nhằm:', options: [{ key: 'A', text: 'Làm ấm cây.' }, { key: 'B', text: 'Ức chế ra hoa (kéo dài thời gian sinh trưởng để cây lớn hơn).' }, { key: 'C', text: 'Kích thích ra hoa ngay lập tức.' }, { key: 'D', text: 'Đuổi sâu bọ.' }], correctAnswer: 'B', explanation: 'Điều khiển quang chu kỳ để hoa nở đúng dịp Tết.' },
        { id: 'b37-q4', difficulty: 'TH', question: 'Để kích thích hạt nảy mầm nhanh, người ta thường:', options: [{ key: 'A', text: 'Ngâm hạt trong nước ấm.' }, { key: 'B', text: 'Phơi hạt ngoài nắng to.' }, { key: 'C', text: 'Để hạt trong tủ lạnh.' }, { key: 'D', text: 'Rang hạt.' }], correctAnswer: 'A', explanation: 'Nước ấm và độ ẩm kích thích hô hấp và nảy mầm.' },
        { id: 'b37-q5', difficulty: 'VD', question: 'Tiêu diệt muỗi ở giai đoạn nào là hiệu quả nhất?', options: [{ key: 'A', text: 'Trứng.' }, { key: 'B', text: 'Bọ gậy (ấu trùng).' }, { key: 'C', text: 'Muỗi trưởng thành.' }, { key: 'D', text: 'Nhộng.' }], correctAnswer: 'B', explanation: 'Giai đoạn ấu trùng sống dưới nước dễ tiêu diệt tập trung.' },
        { id: 'b37-q6', difficulty: 'NB', question: 'Chất kích thích sinh trưởng (Hormone) được dùng để:', options: [{ key: 'A', text: 'Giúp cây lớn nhanh, ra rễ, ra hoa.' }, { key: 'B', text: 'Làm cây chết.' }, { key: 'C', text: 'Làm đất tơi xốp.' }, { key: 'D', text: 'Diệt cỏ.' }], correctAnswer: 'A', explanation: 'Ứng dụng hormone thực vật.' },
        { id: 'b37-q7', difficulty: 'TH', question: 'Trong chăn nuôi, để vật nuôi lớn nhanh cần:', options: [{ key: 'A', text: 'Cho ăn uống đủ chất, vệ sinh chuồng trại, tiêm phòng.' }, { key: 'B', text: 'Cho ăn thật nhiều tinh bột.' }, { key: 'C', text: 'Nhốt kín không cho vận động.' }, { key: 'D', text: 'Không cho uống nước.' }], correctAnswer: 'A', explanation: 'Chế độ dinh dưỡng và chăm sóc hợp lí.' },
        { id: 'b37-q8', difficulty: 'TH', question: 'Tại sao không nên lạm dụng chất kích thích sinh trưởng trong trồng trọt?', options: [{ key: 'A', text: 'Gây tốn kém.' }, { key: 'B', text: 'Tồn dư hóa chất trong nông sản gây hại sức khỏe người dùng.' }, { key: 'C', text: 'Làm cây chết ngay.' }, { key: 'D', text: 'Làm quả bị bé.' }], correctAnswer: 'B', explanation: 'Ảnh hưởng đến an toàn thực phẩm.' },
        { id: 'b37-q9', difficulty: 'TH', question: 'Nhiệt độ quá thấp (rét đậm) ảnh hưởng thế nào đến động vật biến nhiệt (cá, ếch)?', options: [{ key: 'A', text: 'Sinh trưởng chậm lại hoặc chết.' }, { key: 'B', text: 'Sinh trưởng nhanh hơn.' }, { key: 'C', text: 'Không ảnh hưởng.' }, { key: 'D', text: 'Ăn nhiều hơn.' }], correctAnswer: 'A', explanation: 'Thân nhiệt giảm theo môi trường → chuyển hóa giảm.' },
        { id: 'b37-q10', difficulty: 'VD', question: 'Biện pháp trồng rau trái vụ dựa trên:', options: [{ key: 'A', text: 'Điều khiển nhiệt độ, ánh sáng (nhà kính).' }, { key: 'B', text: 'Dùng thuốc diệt cỏ.' }, { key: 'C', text: 'Không tưới nước.' }, { key: 'D', text: 'Trồng trên cát.' }], correctAnswer: 'A', explanation: 'Tạo điều kiện môi trường nhân tạo phù hợp.' }
      ],
      essay: [
        { id: 'b37-e1', difficulty: 'TH', question: 'Nêu các biện pháp điều khiển sinh trưởng và phát triển ở cây trồng.', sampleAnswer: 'Chiếu sáng nhân tạo (cho thanh long, hoa cúc). Bón phân, tưới nước hợp lí. Sử dụng hormone sinh trưởng (kích rễ, kích ra hoa). Bấm ngọn, tỉa cành.' },
        { id: 'b37-e2', difficulty: 'VD', question: 'Tại sao phải tiêu diệt sâu hại (bướm) ở giai đoạn sâu non (sâu bướm) thay vì giai đoạn bướm trưởng thành?', sampleAnswer: 'Vì giai đoạn sâu non là giai đoạn chúng ăn lá cây mạnh nhất để tích lũy dinh dưỡng, gây hại lớn nhất cho mùa màng. Diệt ở giai đoạn này ngăn chặn sự phá hoại hiệu quả nhất.' }
      ]
    }
  },
  {
    id: 'bai-39',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 39: Sinh Sản Vô Tính Ở Sinh Vật',
    colorTheme: 'from-emerald-400 to-cyan-400',
    objectives: ['Khái niệm sinh sản vô tính', 'Các hình thức sinh sản vô tính', 'Ứng dụng'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b39-q1', difficulty: 'NB', question: 'Sinh sản vô tính là:', options: [{ key: 'A', text: 'Hình thức sinh sản có sự kết hợp giao tử đực và cái.' }, { key: 'B', text: 'Hình thức sinh sản không có sự hợp nhất giao tử đực và cái, con sinh ra giống hệt mẹ.' }, { key: 'C', text: 'Sinh sản bằng hạt.' }, { key: 'D', text: 'Đẻ trứng.' }], correctAnswer: 'B', explanation: 'Định nghĩa sinh sản vô tính.' },
        { id: 'b39-q2', difficulty: 'NB', question: 'Cây thuốc bỏng mọc ra cây con từ:', options: [{ key: 'A', text: 'Rễ.' }, { key: 'B', text: 'Thân.' }, { key: 'C', text: 'Mép lá.' }, { key: 'D', text: 'Hoa.' }], correctAnswer: 'C', explanation: 'Sinh sản sinh dưỡng từ lá.' },
        { id: 'b39-q3', difficulty: 'NB', question: 'Hình thức sinh sản của trùng roi, trùng giày là:', options: [{ key: 'A', text: 'Phân đôi.' }, { key: 'B', text: 'Nảy chồi.' }, { key: 'C', text: 'Tái sinh.' }, { key: 'D', text: 'Đẻ trứng.' }], correctAnswer: 'A', explanation: 'Cơ thể mẹ phân đôi thành 2 cơ thể con.' },
        { id: 'b39-q4', difficulty: 'NB', question: 'Thủy tức sinh sản bằng cách:', options: [{ key: 'A', text: 'Phân đôi.' }, { key: 'B', text: 'Nảy chồi.' }, { key: 'C', text: 'Hạt.' }, { key: 'D', text: 'Căn hành.' }], correctAnswer: 'B', explanation: 'Mọc chồi con trên cơ thể mẹ rồi tách ra.' },
        { id: 'b39-q5', difficulty: 'TH', question: 'Phương pháp nhân giống nào tạo ra cây con sạch bệnh, số lượng lớn trong thời gian ngắn?', options: [{ key: 'A', text: 'Giâm cành.' }, { key: 'B', text: 'Chiết cành.' }, { key: 'C', text: 'Nuôi cấy mô tế bào.' }, { key: 'D', text: 'Ghép cành.' }], correctAnswer: 'C', explanation: 'Ưu điểm vượt trội của nuôi cấy mô.' },
        { id: 'b39-q6', difficulty: 'NB', question: 'Giâm cành thường áp dụng cho cây:', options: [{ key: 'A', text: 'Mía, Sắn, Khoai lang.' }, { key: 'B', text: 'Lúa, Ngô.' }, { key: 'C', text: 'Xoài, Mít. ' }, { key: 'D', text: 'Đậu.' }], correctAnswer: 'A', explanation: 'Các cây dễ ra rễ từ đoạn thân/cành.' },
        { id: 'b39-q7', difficulty: 'TH', question: 'Trong ghép cành, cành ghép phải:', options: [{ key: 'A', text: 'Bỏ hết lá.' }, { key: 'B', text: 'Có mang chồi ngủ, cùng họ với gốc ghép.' }, { key: 'C', text: 'Khác loài hoàn toàn.' }, { key: 'D', text: 'Đã chết khô.' }], correctAnswer: 'B', explanation: 'Để đảm bảo tương thích sinh học và phát triển.' },
        { id: 'b39-q8', difficulty: 'TH', question: 'Ưu điểm của sinh sản vô tính:', options: [{ key: 'A', text: 'Tạo ra các cá thể thích nghi tốt với môi trường thay đổi.' }, { key: 'B', text: 'Giữ nguyên được các đặc tính tốt của cây mẹ.' }, { key: 'C', text: 'Tạo ra sự đa dạng di truyền.' }, { key: 'D', text: 'Con sinh ra khác hẳn mẹ.' }], correctAnswer: 'B', explanation: 'Do cơ sở là quá trình nguyên phân, gen không đổi.' },
        { id: 'b39-q9', difficulty: 'VD', question: 'Sắp xếp các bước chiết cành: (1) Bó bầu đất, (2) Khoanh vỏ, (3) Cắt cành trồng.', options: [{ key: 'A', text: '1-2-3.' }, { key: 'B', text: '2-1-3.' }, { key: 'C', text: '3-2-1.' }, { key: 'D', text: '2-3-1.' }], correctAnswer: 'B', explanation: 'Khoanh vỏ → Bó bầu (chờ ra rễ) → Cắt trồng.' },
        { id: 'b39-q10', difficulty: 'NB', question: 'Hình thức sinh sản của sao biển là:', options: [{ key: 'A', text: 'Phân mảnh (tái sinh).' }, { key: 'B', text: 'Nảy chồi.' }, { key: 'C', text: 'Phân đôi.' }, { key: 'D', text: 'Hạt.' }], correctAnswer: 'A', explanation: 'Một phần cơ thể tái sinh thành con mới.' }
      ],
      essay: [
        { id: 'b39-e1', difficulty: 'TH', question: 'So sánh sinh sản vô tính và hữu tính (về khái niệm, đặc điểm con non).', sampleAnswer: 'Vô tính: Không có sự kết hợp giao tử, con giống hệt nhau và giống mẹ. Hữu tính: Có sự kết hợp giao tử đực và cái, con có đặc điểm của cả bố và mẹ (đa dạng di truyền).' },
        { id: 'b39-e2', difficulty: 'VD', question: 'Tại sao người ta thường trồng khoai tây bằng củ mà không trồng bằng hạt?', sampleAnswer: 'Trồng bằng củ (sinh sản vô tính) giúp cây con giữ được đặc tính tốt của cây mẹ, sinh trưởng nhanh, thu hoạch sớm hơn so với trồng từ hạt.' }
      ]
    }
  },
  {
    id: 'bai-40',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 40: Sinh Sản Hữu Tính Ở Sinh Vật',
    colorTheme: 'from-pink-400 to-rose-400',
    objectives: ['Khái niệm sinh sản hữu tính', 'Cơ quan sinh sản', 'Quá trình sinh sản hữu tính'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b40-q1', difficulty: 'NB', question: 'Sinh sản hữu tính là:', options: [{ key: 'A', text: 'Sự kết hợp giữa giao tử đực và giao tử cái tạo thành hợp tử.' }, { key: 'B', text: 'Sự phân đôi cơ thể.' }, { key: 'C', text: 'Sự nảy chồi.' }, { key: 'D', text: 'Sinh sản bằng bào tử.' }], correctAnswer: 'A', explanation: 'Đặc trưng cơ bản của sinh sản hữu tính.' },
        { id: 'b40-q2', difficulty: 'NB', question: 'Cơ quan sinh sản của thực vật hạt kín là:', options: [{ key: 'A', text: 'Rễ.' }, { key: 'B', text: 'Thân.' }, { key: 'C', text: 'Hoa.' }, { key: 'D', text: 'Lá.' }], correctAnswer: 'C', explanation: 'Hoa chứa nhị và nhụy.' },
        { id: 'b40-q3', difficulty: 'NB', question: 'Thụ phấn là quá trình:', options: [{ key: 'A', text: 'Hạt phấn tiếp xúc với đầu nhụy.' }, { key: 'B', text: 'Tinh tử kết hợp với noãn.' }, { key: 'C', text: 'Hạt nảy mầm.' }, { key: 'D', text: 'Ong hút mật.' }], correctAnswer: 'A', explanation: 'Định nghĩa thụ phấn.' },
        { id: 'b40-q4', difficulty: 'NB', question: 'Thụ tinh là:', options: [{ key: 'A', text: 'Sự kết hợp nhân của giao tử đực và giao tử cái tạo thành hợp tử.' }, { key: 'B', text: 'Sự tạo hạt.' }, { key: 'C', text: 'Sự phát tán hạt phấn.' }, { key: 'D', text: 'Sự nở hoa.' }], correctAnswer: 'A', explanation: 'Bản chất của thụ tinh.' },
        { id: 'b40-q5', difficulty: 'NB', question: 'Ở động vật, sinh sản hữu tính gồm các giai đoạn:', options: [{ key: 'A', text: 'Hình thành giao tử → Thụ tinh → Phát triển phôi.' }, { key: 'B', text: 'Thụ tinh → Đẻ con.' }, { key: 'C', text: 'Giao phối → Đẻ trứng.' }, { key: 'D', text: 'Phân chia tế bào.' }], correctAnswer: 'A', explanation: 'Quy trình đầy đủ.' },
        { id: 'b40-q6', difficulty: 'NB', question: 'Động vật nào đẻ trứng?', options: [{ key: 'A', text: 'Chó, Mèo.' }, { key: 'B', text: 'Gà, Vịt, Ếch.' }, { key: 'C', text: 'Bò, Lợn.' }, { key: 'D', text: 'Cá voi.' }], correctAnswer: 'B', explanation: 'Nhóm động vật đẻ trứng.' },
        { id: 'b40-q7', difficulty: 'NB', question: 'Động vật nào đẻ con (thai sinh)?', options: [{ key: 'A', text: 'Chim bồ câu.' }, { key: 'B', text: 'Thú (Chó, Mèo, Người).' }, { key: 'C', text: 'Cá sấu.' }, { key: 'D', text: 'Rùa.' }], correctAnswer: 'B', explanation: 'Thú là động vật đẻ con và nuôi con bằng sữa.' },
        { id: 'b40-q8', difficulty: 'NB', question: 'Hoa lưỡng tính là hoa:', options: [{ key: 'A', text: 'Có cả nhị và nhụy trên cùng một hoa.' }, { key: 'B', text: 'Chỉ có nhị.' }, { key: 'C', text: 'Chỉ có nhụy.' }, { key: 'D', text: 'Không có nhị và nhụy.' }], correctAnswer: 'A', explanation: 'Ví dụ: hoa bưởi, hoa cam.' },
        { id: 'b40-q9', difficulty: 'TH', question: 'Sau khi thụ tinh, bầu nhụy phát triển thành:', options: [{ key: 'A', text: 'Hạt.' }, { key: 'B', text: 'Quả.' }, { key: 'C', text: 'Hạt phấn.' }, { key: 'D', text: 'Cánh hoa.' }], correctAnswer: 'B', explanation: 'Noãn thành hạt, bầu nhụy thành quả.' },
        { id: 'b40-q10', difficulty: 'TH', question: 'Ưu điểm của sinh sản hữu tính so với vô tính:', options: [{ key: 'A', text: 'Tạo ra ít con.' }, { key: 'B', text: 'Tạo ra thế hệ con đa dạng về di truyền, thích nghi tốt hơn.' }, { key: 'C', text: 'Giữ nguyên đặc tính mẹ.' }, { key: 'D', text: 'Nhanh hơn.' }], correctAnswer: 'B', explanation: 'Do có sự tổ hợp vật chất di truyền.' }
      ],
      essay: [
        { id: 'b40-e1', difficulty: 'TH', question: 'Mô tả quá trình sinh sản hữu tính ở thực vật có hoa.', sampleAnswer: 'Tạo giao tử (hạt phấn, noãn) → Thụ phấn (hạt phấn dính đầu nhụy) → Thụ tinh (tinh tử + trứng → hợp tử) → Hình thành quả và hạt.' },
        { id: 'b40-e2', difficulty: 'TH', question: 'Phân biệt thụ tinh ngoài và thụ tinh trong. Cho ví dụ.', sampleAnswer: 'Thụ tinh ngoài: Trứng và tinh trùng gặp nhau ngoài cơ thể (trong nước). VD: Cá, Ếch. Thụ tinh trong: Trứng và tinh trùng gặp nhau trong cơ quan sinh dục cái. VD: Gà, Chó, Bò.' }
      ]
    }
  },
  {
    id: 'bai-41',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 41: Yếu Tố Ảnh Hưởng Đến Sinh Sản',
    colorTheme: 'from-orange-400 to-amber-500',
    objectives: ['Yếu tố môi trường', 'Điều hòa sinh sản', 'Điều khiển sinh sản'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b41-q1', difficulty: 'NB', question: 'Yếu tố môi trường nào ảnh hưởng đến sinh sản?', options: [{ key: 'A', text: 'Nhiệt độ, ánh sáng, độ ẩm, thức ăn.' }, { key: 'B', text: 'Chỉ nhiệt độ.' }, { key: 'C', text: 'Chỉ thức ăn.' }, { key: 'D', text: 'Gió.' }], correctAnswer: 'A', explanation: 'Các nhân tố ngoại cảnh tác động mạnh đến sinh sản.' },
        { id: 'b41-q2', difficulty: 'NB', question: 'Thiếu thức ăn, động vật sẽ:', options: [{ key: 'A', text: 'Đẻ nhiều hơn.' }, { key: 'B', text: 'Giảm hoặc ngừng sinh sản.' }, { key: 'C', text: 'Không ảnh hưởng.' }, { key: 'D', text: 'Sinh trưởng nhanh.' }], correctAnswer: 'B', explanation: 'Thiếu dinh dưỡng → cơ thể không đủ năng lượng để sinh sản.' },
        { id: 'b41-q3', difficulty: 'NB', question: 'Hormone có vai trò gì trong sinh sản?', options: [{ key: 'A', text: 'Điều hòa quá trình sinh tinh, sinh trứng.' }, { key: 'B', text: 'Làm tăng nhiệt độ.' }, { key: 'C', text: 'Cung cấp dinh dưỡng.' }, { key: 'D', text: 'Tiêu diệt tế bào.' }], correctAnswer: 'A', explanation: 'Điều khiển cơ chế sinh sản bên trong.' },
        { id: 'b41-q4', difficulty: 'VD', question: 'Thắp đèn cho gà đẻ trứng vào mùa đông là ứng dụng:', options: [{ key: 'A', text: 'Yếu tố nhiệt độ.' }, { key: 'B', text: 'Yếu tố ánh sáng.' }, { key: 'C', text: 'Yếu tố độ ẩm.' }, { key: 'D', text: 'Yếu tố âm thanh.' }], correctAnswer: 'B', explanation: 'Tăng thời gian chiếu sáng kích thích buồng trứng hoạt động.' },
        { id: 'b41-q5', difficulty: 'VD', question: 'Biện pháp thụ phấn nhân tạo cho ngô (bắp) nhằm:', options: [{ key: 'A', text: 'Tăng tỉ lệ đậu hạt, giảm hạt lép.' }, { key: 'B', text: 'Làm cây cao hơn.' }, { key: 'C', text: 'Làm bắp to hơn.' }, { key: 'D', text: 'Giảm sâu bệnh.' }], correctAnswer: 'A', explanation: 'Hỗ trợ khi thụ phấn tự nhiên kém (ít gió).' },
        { id: 'b41-q6', difficulty: 'TH', question: 'Điều khiển giới tính vật nuôi bằng cách:', options: [{ key: 'A', text: 'Sử dụng hormone hoặc lọc tinh trùng.' }, { key: 'B', text: 'Cho ăn nhiều.' }, { key: 'C', text: 'Tắm rửa sạch sẽ.' }, { key: 'D', text: 'Không thể điều khiển được.' }], correctAnswer: 'A', explanation: 'Để tạo ra nhiều con đực (lấy thịt) hoặc cái (lấy sữa/trứng) tùy mục đích.' },
        { id: 'b41-q7', difficulty: 'VD', question: 'Cây thanh long ra hoa trái vụ nhờ:', options: [{ key: 'A', text: 'Thắp đèn chiếu sáng ban đêm.' }, { key: 'B', text: 'Tưới nước đá.' }, { key: 'C', text: 'Bón vôi.' }, { key: 'D', text: 'Che tối.' }], correctAnswer: 'A', explanation: 'Thanh long là cây ngày dài, cần chiếu sáng bổ sung.' },
        { id: 'b41-q8', difficulty: 'TH', question: 'Ở thực vật, nhiệt độ quá thấp hoặc quá cao sẽ:', options: [{ key: 'A', text: 'Làm hạt phấn chết, giảm thụ phấn.' }, { key: 'B', text: 'Tăng thụ phấn.' }, { key: 'C', text: 'Làm hoa đẹp hơn.' }, { key: 'D', text: 'Không ảnh hưởng.' }], correctAnswer: 'A', explanation: 'Ảnh hưởng sức sống hạt phấn và noãn.' },
        { id: 'b41-q9', difficulty: 'TH', question: 'Nuôi cấy phôi ở bò nhằm:', options: [{ key: 'A', text: 'Tăng nhanh số lượng bò con có phẩm chất tốt.' }, { key: 'B', text: 'Chữa bệnh cho bò.' }, { key: 'C', text: 'Làm bò lớn nhanh.' }, { key: 'D', text: 'Giảm lượng sữa.' }], correctAnswer: 'A', explanation: 'Công nghệ sinh học trong nhân giống.' },
        { id: 'b41-q10', difficulty: 'VD', question: 'Để cá mè đẻ trứng, người ta thường:', options: [{ key: 'A', text: 'Tiêm dịch chiết tuyến yên (hormone).' }, { key: 'B', text: 'Cho ăn no.' }, { key: 'C', text: 'Sưởi ấm.' }, { key: 'D', text: 'Bắt lên cạn.' }], correctAnswer: 'A', explanation: 'Kích thích trứng chín và rụng.' }
      ],
      essay: [
        { id: 'b41-e1', difficulty: 'VD', question: 'Tại sao người trồng hoa cúc thường thắp đèn vào ban đêm trong giai đoạn cây còn nhỏ?', sampleAnswer: 'Hoa cúc là cây ngày ngắn (ra hoa khi đêm dài). Thắp đèn để "phá" đêm dài → ngăn cây ra hoa sớm → giúp cây tập trung dinh dưỡng phát triển thân lá cho to khỏe trước khi cho ra hoa vào đúng dịp Tết.' },
        { id: 'b41-e2', difficulty: 'TH', question: 'Nêu các biện pháp điều khiển sinh sản ở động vật và ý nghĩa của chúng.', sampleAnswer: 'Sử dụng hormone (kích thích đẻ trứng), thay đổi chế độ chiếu sáng (gà đẻ trứng), thụ tinh nhân tạo. Ý nghĩa: Tăng năng suất chăn nuôi, chủ động thời gian sinh sản.' }
      ]
    }
  },
  {
    id: 'bai-42',
    topic: 'PHẦN 4: VẬT SỐNG',
    title: 'Bài 42: Cơ Thể Sinh Vật Là Một Thể Thống Nhất',
    colorTheme: 'from-blue-600 to-indigo-600',
    objectives: ['Mối quan hệ tế bào - cơ thể', 'Sự thống nhất về cấu trúc', 'Sự thống nhất về chức năng'],
    theory: [],
    practice: {
      mcq: [
        { id: 'b42-q1', difficulty: 'NB', question: 'Cơ thể sinh vật được coi là một thể thống nhất vì:', options: [{ key: 'A', text: 'Các cơ quan hoạt động độc lập.' }, { key: 'B', text: 'Có sự phối hợp hoạt động giữa các tế bào, mô, cơ quan, hệ cơ quan.' }, { key: 'C', text: 'Chỉ có một tế bào.' }, { key: 'D', text: 'Không trao đổi chất với môi trường.' }], correctAnswer: 'B', explanation: 'Sự liên kết và phối hợp chức năng.' },
        { id: 'b42-q2', difficulty: 'NB', question: 'Mối quan hệ giữa tế bào và cơ thể là:', options: [{ key: 'A', text: 'Tế bào là đơn vị cấu trúc và chức năng của cơ thể.' }, { key: 'B', text: 'Tế bào không liên quan đến cơ thể.' }, { key: 'C', text: 'Cơ thể điều khiển tế bào nhưng tế bào hoạt động riêng lẻ.' }, { key: 'D', text: 'Cơ thể là tập hợp các tế bào rời rạc.' }], correctAnswer: 'A', explanation: 'Mọi hoạt động sống của cơ thể đều diễn ra ở tế bào.' },
        { id: 'b42-q3', difficulty: 'TH', question: 'Khi chạy, hệ cơ quan nào hoạt động mạnh?', options: [{ key: 'A', text: 'Hệ vận động.' }, { key: 'B', text: 'Hệ hô hấp và tuần hoàn.' }, { key: 'C', text: 'Hệ thần kinh.' }, { key: 'D', text: 'Tất cả các hệ trên phối hợp với nhau.' }], correctAnswer: 'D', explanation: 'Cần sự phối hợp: thần kinh chỉ huy, cơ vận động, tim phổi cung cấp năng lượng.' },
        { id: 'b42-q4', difficulty: 'TH', question: 'Nếu hệ bài tiết bị suy giảm chức năng, cơ thể sẽ:', options: [{ key: 'A', text: 'Nhiễm độc chất thải, ảnh hưởng đến các hệ khác và có thể chết.' }, { key: 'B', text: 'Khỏe mạnh hơn.' }, { key: 'C', text: 'Ăn nhiều hơn.' }, { key: 'D', text: 'Không sao cả.' }], correctAnswer: 'A', explanation: 'Mất cân bằng nội môi ảnh hưởng toàn cơ thể.' },
        { id: 'b42-q5', difficulty: 'NB', question: 'Cơ thể lấy chất dinh dưỡng và O2 từ môi trường nhờ:', options: [{ key: 'A', text: 'Hệ tiêu hóa và hệ hô hấp.' }, { key: 'B', text: 'Hệ thần kinh.' }, { key: 'C', text: 'Hệ vận động.' }, { key: 'D', text: 'Hệ bài tiết.' }], correctAnswer: 'A', explanation: 'Chức năng lấy vật chất và năng lượng.' },
        { id: 'b42-q6', difficulty: 'NB', question: 'Hoạt động sống nào là trung tâm liên kết các hoạt động khác?', options: [{ key: 'A', text: 'Trao đổi chất và chuyển hóa năng lượng.' }, { key: 'B', text: 'Sinh sản.' }, { key: 'C', text: 'Cảm ứng.' }, { key: 'D', text: 'Vận động.' }], correctAnswer: 'A', explanation: 'Cung cấp năng lượng cho sinh trưởng, cảm ứng, sinh sản.' },
        { id: 'b42-q7', difficulty: 'TH', question: 'Khi lá cây bị héo (thiếu nước), quá trình nào bị ảnh hưởng đầu tiên?', options: [{ key: 'A', text: 'Quang hợp.' }, { key: 'B', text: 'Hô hấp.' }, { key: 'C', text: 'Hút khoáng.' }, { key: 'D', text: 'Tất cả đều bị ảnh hưởng.' }], correctAnswer: 'A', explanation: 'Khí khổng đóng → ngừng quang hợp → ngừng tổng hợp chất → ảnh hưởng toàn cây.' },
        { id: 'b42-q8', difficulty: 'NB', question: 'Tế bào hồng cầu chuyên hóa chức năng gì?', options: [{ key: 'A', text: 'Vận chuyển khí O2 và CO2.' }, { key: 'B', text: 'Bảo vệ cơ thể.' }, { key: 'C', text: 'Dẫn truyền xung thần kinh.' }, { key: 'D', text: 'Co giãn.' }], correctAnswer: 'A', explanation: 'Cấu tạo đĩa lõm phù hợp chức năng vận chuyển khí.' },
        { id: 'b42-q9', difficulty: 'NB', question: 'Hệ thần kinh và nội tiết có vai trò:', options: [{ key: 'A', text: 'Vận chuyển chất.' }, { key: 'B', text: 'Điều khiển, điều hòa và phối hợp hoạt động các cơ quan.' }, { key: 'C', text: 'Tiêu hóa thức ăn.' }, { key: 'D', text: 'Lọc máu.' }], correctAnswer: 'B', explanation: 'Vai trò chỉ đạo thống nhất.' },
        { id: 'b42-q10', difficulty: 'TH', question: 'Cơ thể sinh vật là hệ thống mở vì:', options: [{ key: 'A', text: 'Luôn trao đổi chất và năng lượng với môi trường.' }, { key: 'B', text: 'Không có da bao bọc.' }, { key: 'C', text: 'Cơ thể luôn mở rộng.' }, { key: 'D', text: 'Không kiểm soát được.' }], correctAnswer: 'A', explanation: 'Tương tác liên tục với môi trường.' }
      ],
      essay: [
        { id: 'b42-e1', difficulty: 'TH', question: 'Chứng minh cơ thể sinh vật là một thể thống nhất.', sampleAnswer: 'Thống nhất về cấu trúc: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể. Thống nhất về chức năng: Các hệ cơ quan phối hợp nhịp nhàng (VD: Khi chạy, tim đập nhanh, phổi thở gấp để cung cấp O2 cho cơ bắp) dưới sự điều khiển của hệ thần kinh/nội tiết.' },
        { id: 'b42-e2', difficulty: 'VD', question: 'Tại sao khi một cơ quan trong cơ thể bị bệnh (ví dụ đau dạ dày) thì toàn bộ cơ thể đều cảm thấy mệt mỏi?', sampleAnswer: 'Vì các cơ quan có mối liên hệ mật thiết. Dạ dày đau → kém hấp thu dinh dưỡng → thiếu năng lượng cho các cơ quan khác → cơ thể mệt mỏi. Ngoài ra, cảm giác đau được truyền về hệ thần kinh gây ảnh hưởng tâm lý chung.' }
      ]
    }
  }
];

export const TOPICS = Array.from(new Set(CURRICULUM.map(lesson => lesson.topic)));
