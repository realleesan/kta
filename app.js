/* ==========================================================================
   KTA BUILD - JAVASCRIPT XỬ LÝ DỮ LIỆU & TƯƠNG TÁC DOANH NGHIỆP
   ========================================================================== */

const state = {
  activeRole: 'office', // 'office' | 'field'
  activeProject: 'p1',
  
  projects: {
    p1: {
      id: 'p1',
      name: 'Biệt thự Yên Bệ - Hoài Đức',
      client: 'Anh Hoàng (0912.xxx.888)',
      address: 'Cổng làng Yên Bệ, Hoài Đức, Hà Nội',
      totalBudget: 4850000000,
      collectedAmount: 2910000000,
      progress: 72,
      stage: 'Ghép cốt pha & Đổ sàn T2',
      siteEngineer: 'KS. Nguyễn Văn Hùng',
      workersToday: 18,
      status: 'active',
      statusText: 'Đúng tiến độ',
      docsCount: 14,
      boq: [
        { stt: 1, name: 'Công tác Ép cọc bê tông cốt thép D300', unit: 'Mét', qty: 620, matPrice: 280000, labPrice: 65000, total: 213900000, status: 'Hoàn thành' },
        { stt: 2, name: 'Đào đất móng & Xây tường móng gạch đặc', unit: 'M3', qty: 145, matPrice: 420000, labPrice: 280000, total: 101500000, status: 'Hoàn thành' },
        { stt: 3, name: 'Bê tông lót móng & Đổ bê tông đài giằng M250', unit: 'M3', qty: 95, matPrice: 1250000, labPrice: 350000, total: 152000000, status: 'Hoàn thành' },
        { stt: 4, name: 'Gia công cốt thép dầm, cột, sàn T1 & T2 (Hòa Phát)', unit: 'Tấn', qty: 18.5, matPrice: 16800000, labPrice: 2200000, total: 351500000, status: 'Đang làm' },
        { stt: 5, name: 'Đổ bê tông tươi sàn tầng 2 (Thương phẩm Sông Đà)', unit: 'M3', qty: 48, matPrice: 1350000, labPrice: 380000, total: 83040000, status: 'Chuẩn bị đổ' },
        { stt: 6, name: 'Xây thô tường bao & ngăn phòng gạch Tuynel', unit: 'M2', qty: 780, matPrice: 145000, labPrice: 110000, total: 198900000, status: 'Chưa làm' },
        { stt: 7, name: 'Hệ thống điện nước ME âm tường (Cadivi & Tiền Phong)', unit: 'Gói', qty: 1, matPrice: 185000000, labPrice: 75000000, total: 260000000, status: 'Chưa làm' },
        { stt: 8, name: 'Trát tường, ốp lát đá Marble & Hoàn thiện sơn bả', unit: 'M2', qty: 1100, matPrice: 220000, labPrice: 135000, total: 390500000, status: 'Chưa làm' }
      ],
      milestones: [
        { name: 'Đợt 1: Tạm ứng ký hợp đồng', percent: '20%', amount: 970000000, trigger: 'Ngay khi ký HĐ & khởi công', deadline: '10/08/2026', status: 'paid' },
        { name: 'Đợt 2: Nghiệm thu xong phần móng', percent: '20%', amount: 970000000, trigger: 'Xong đài móng & giằng móng', deadline: '25/08/2026', status: 'paid' },
        { name: 'Đợt 3: Đổ bê tông xong sàn tầng 2', percent: '20%', amount: 970000000, trigger: 'Nghiệm thu đổ sàn T2', deadline: '04/10/2026', status: 'due_soon' },
        { name: 'Đợt 4: Cất nóc & Xong phần thô', percent: '20%', amount: 970000000, trigger: 'Nghiệm thu cất nóc', deadline: '28/10/2026', status: 'pending' },
        { name: 'Đợt 5: Bàn giao & Quyết toán', percent: '15%', amount: 727500000, trigger: 'Bàn giao chìa khóa', deadline: '15/12/2026', status: 'pending' },
        { name: 'Đợt 6: Bảo hành công trình (12 tháng)', percent: '5%', amount: 242500000, trigger: 'Hết thời hạn bảo hành', deadline: '15/12/2027', status: 'pending' }
      ]
    },
    p2: {
      id: 'p2',
      name: 'Tòa nhà KTA Tower - Cầu Giấy',
      client: 'KTA Group',
      address: 'Trần Thái Tông, Cầu Giấy, Hà Nội',
      totalBudget: 15200000000,
      collectedAmount: 9880000000,
      progress: 48,
      stage: 'Đổ bê tông dầm cột T5',
      siteEngineer: 'KS. Trần Quốc Đạt',
      workersToday: 36,
      status: 'active',
      statusText: 'Vượt tiến độ 2 ngày',
      docsCount: 28,
      boq: [
        { stt: 1, name: 'Khoan cọc nhồi D1000 sâu 45m', unit: 'Cọc', qty: 38, matPrice: 28000000, labPrice: 7500000, total: 1349000000, status: 'Hoàn thành' },
        { stt: 2, name: 'Thi công tầng hầm & Tường vây', unit: 'Gói', qty: 1, matPrice: 1950000000, labPrice: 650000000, total: 2600000000, status: 'Hoàn thành' },
        { stt: 3, name: 'Kết cấu bê tông cốt thép Tầng 1 - Tầng 4', unit: 'Sàn', qty: 4, matPrice: 480000000, labPrice: 160000000, total: 2560000000, status: 'Hoàn thành' },
        { stt: 4, name: 'Kết cấu bê tông cốt thép Tầng 5 - Tầng 7', unit: 'Sàn', qty: 3, matPrice: 480000000, labPrice: 160000000, total: 1920000000, status: 'Đang làm' }
      ],
      milestones: [
        { name: 'Đợt 1: Ký HĐ & Khởi công', percent: '25%', amount: 3800000000, trigger: 'Ký HĐ', deadline: '15/05/2026', status: 'paid' },
        { name: 'Đợt 2: Xong hầm & Sàn T1', percent: '20%', amount: 3040000000, trigger: 'Nghiệm thu sàn T1', deadline: '30/07/2026', status: 'paid' },
        { name: 'Đợt 3: Xong sàn T4', percent: '20%', amount: 3040000000, trigger: 'Nghiệm thu sàn T4', deadline: '15/09/2026', status: 'paid' },
        { name: 'Đợt 4: Cất nóc Tầng 7', percent: '15%', amount: 2280000000, trigger: 'Nghiệm thu cất nóc', deadline: '20/10/2026', status: 'pending' },
        { name: 'Đợt 5: Bàn giao & Quyết toán', percent: '20%', amount: 3040000000, trigger: 'Bàn giao', deadline: '30/12/2026', status: 'pending' }
      ]
    },
    p3: {
      id: 'p3',
      name: 'Liền kề Splendora An Khánh',
      client: 'Chị Mai (0988.xxx.666)',
      address: 'KĐT Nam An Khánh, Hoài Đức',
      totalBudget: 3250000000,
      collectedAmount: 2762500000,
      progress: 88,
      stage: 'Sơn bả & Lắp thiết bị ME',
      siteEngineer: 'KS. Lê Minh Tuấn',
      workersToday: 22,
      status: 'active',
      statusText: 'Chuẩn bị bàn giao',
      docsCount: 19,
      boq: [
        { stt: 1, name: 'Cải tạo phá dỡ & Xây tường ngăn mới', unit: 'M2', qty: 320, matPrice: 150000, labPrice: 120000, total: 86400000, status: 'Hoàn thành' },
        { stt: 2, name: 'Hệ thống điều hòa Multi Daikin âm trần', unit: 'Bộ', qty: 6, matPrice: 32000000, labPrice: 3500000, total: 213000000, status: 'Hoàn thành' },
        { stt: 3, name: 'Ốp lát đá Granite & Gạch 80x80 Eurotile', unit: 'M2', qty: 280, matPrice: 480000, labPrice: 160000, total: 179200000, status: 'Hoàn thành' },
        { stt: 4, name: 'Sơn lót & Sơn màu Dulux EasyClean', unit: 'M2', qty: 850, matPrice: 65000, labPrice: 45000, total: 93500000, status: 'Đang làm' }
      ],
      milestones: [
        { name: 'Đợt 1: Tạm ứng hợp đồng', percent: '30%', amount: 975000000, trigger: 'Ký HĐ', deadline: '01/07/2026', status: 'paid' },
        { name: 'Đợt 2: Xong thô & ME âm tường', percent: '30%', amount: 975000000, trigger: 'Xong thô', deadline: '15/08/2026', status: 'paid' },
        { name: 'Đợt 3: Xong ốp lát & Sơn bả', percent: '25%', amount: 812500000, trigger: 'Nghiệm thu sơn', deadline: '20/09/2026', status: 'paid' },
        { name: 'Đợt 4: Nghiệm thu bàn giao', percent: '15%', amount: 487500000, trigger: 'Bàn giao nhà', deadline: '15/10/2026', status: 'pending' }
      ]
    },
    p4: {
      id: 'p4',
      name: 'Villa Sinh Thái Suối Hai - Ba Vì',
      client: 'Bác Hùng',
      address: 'Khu du lịch Suối Hai, Ba Vì',
      totalBudget: 5300000000,
      collectedAmount: 2650000000,
      progress: 25,
      stage: 'Thi công móng & Bể ngầm',
      siteEngineer: 'KS. Phạm Hoàng Long',
      workersToday: 18,
      status: 'active',
      statusText: 'Đang đào móng',
      docsCount: 12,
      boq: [
        { stt: 1, name: 'San gạt mặt bằng cảnh quan & Định vị móng', unit: 'M2', qty: 1500, matPrice: 15000, labPrice: 25000, total: 60000000, status: 'Hoàn thành' },
        { stt: 2, name: 'Đào móng băng & Đổ bê tông móng M250', unit: 'M3', qty: 180, matPrice: 1300000, labPrice: 380000, total: 302400000, status: 'Đang làm' }
      ],
      milestones: [
        { name: 'Đợt 1: Tạm ứng khởi công', percent: '30%', amount: 1590000000, trigger: 'Ký HĐ', deadline: '01/09/2026', status: 'paid' },
        { name: 'Đợt 2: Xong móng & sàn T1', percent: '20%', amount: 1060000000, trigger: 'Xong móng', deadline: '10/10/2026', status: 'pending' }
      ]
    }
  },

  materialPOs: [
    {
      id: 'PO-2026-089',
      project: 'Biệt thự Yên Bệ - Hoài Đức',
      engineer: 'KS. Nguyễn Văn Hùng',
      item: '15 Tấn Xi Măng Vicem PCB40',
      time: 'Trước 07:30 Sáng Mai',
      reason: 'Cấp phục vụ đổ sàn tầng 2 và xây thô tường bao',
      status: 'pending'
    },
    {
      id: 'PO-2026-088',
      project: 'Biệt thự Yên Bệ - Hoài Đức',
      engineer: 'KS. Nguyễn Văn Hùng',
      item: '4 Tấn Thép Cuộn D10 Hòa Phát',
      time: 'Trước 14:00 Hôm Nay',
      reason: 'Bổ sung dầm bo ban công và lanh tô cửa',
      status: 'approved'
    },
    {
      id: 'PO-2026-087',
      project: 'Tòa nhà KTA Tower - Cầu Giấy',
      engineer: 'KS. Trần Quốc Đạt',
      item: '80m³ Bê tông thương phẩm M350 R7',
      time: 'Sáng 03/10/2026',
      reason: 'Đổ bê tông dầm sàn tầng 5',
      status: 'pending'
    }
  ],

  fieldLogs: [
    {
      id: 'log-1',
      time: '17:45 Hôm nay',
      project: 'Biệt thự Yên Bệ - Hoài Đức',
      author: 'KS. Nguyễn Văn Hùng',
      title: 'Hoàn thành đan thép sàn T2',
      desc: 'Nghiệm thu thép dầm D20 và sàn a150 đạt 100%. Xe bồn bê tông Sông Đà đã có mặt.',
      tag: 'Nghiệm thu dầm sàn'
    },
    {
      id: 'log-2',
      time: '11:30 Hôm nay',
      project: 'Biệt thự Yên Bệ - Hoài Đức',
      author: 'KS. Nguyễn Văn Hùng',
      title: 'Kiểm tra độ rọi cột & Cây chống giàn giáo',
      desc: 'Giàn giáo bao che và cây chống sắt đã khóa giằng chéo an toàn. Độ thẳng đứng sai số dưới 3mm.',
      tag: 'Kiểm tra an toàn'
    }
  ]
};

// Khởi chạy khi load trang
document.addEventListener('DOMContentLoaded', () => {
  renderOverviewProjects();
  renderProjectsTable();
  renderActiveProject();
  renderBOQTable();
  renderCashflowTable();
  renderMaterialTable();
  renderAttendanceTable();
  renderMobileFeed();
  renderDesktopLiveFeed();
  updateDynamicCounters();
});

// Chuyển đổi giữa Khối Văn Phòng và Khối Hiện Trường
function setRole(role) {
  state.activeRole = role;
  const officeBtn = document.getElementById('role-office-btn');
  const fieldBtn = document.getElementById('role-field-btn');
  const officeView = document.getElementById('office-view-container');
  const fieldView = document.getElementById('field-view-container');

  if (role === 'office') {
    officeBtn.classList.add('active');
    fieldBtn.classList.remove('active');
    officeView.style.display = 'block';
    fieldView.style.display = 'none';
  } else {
    fieldBtn.classList.add('active');
    officeBtn.classList.remove('active');
    officeView.style.display = 'none';
    fieldView.style.display = 'block';
  }
}

// Chuyển đổi các Tab con trong Khối Văn Phòng
function switchOfficeTab(tabId, btnElem) {
  document.querySelectorAll('.subnav-link').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.office-tab-content').forEach(el => el.style.display = 'none');

  if (btnElem) btnElem.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) target.style.display = 'block';
}

// Chọn dự án trên Header
function onProjectChange(projectId) {
  state.activeProject = projectId;
  renderActiveProject();
  renderBOQTable();
  renderCashflowTable();
  showToast(`Đã chuyển sang dự án: ${state.projects[projectId].name}`, 'info');
}

function selectAndFocusProject(projectId) {
  const selectElem = document.getElementById('global-project-select');
  if (selectElem) selectElem.value = projectId;
  state.activeProject = projectId;
  renderActiveProject();
  renderBOQTable();
  renderCashflowTable();
  
  // Chuyển sang tab Dự toán
  const tabs = document.querySelectorAll('.subnav-link');
  if (tabs.length >= 3) {
    switchOfficeTab('tab-estimates', tabs[2]);
  }
}

// Cập nhật các biến số và bộ đếm tự động
function updateDynamicCounters() {
  const projectKeys = Object.keys(state.projects);
  const totalProjects = projectKeys.length;
  
  let totalWorkers = 0;
  let totalBudget = 0;
  let totalCollected = 0;

  projectKeys.forEach(k => {
    const p = state.projects[k];
    totalWorkers += p.workersToday;
    totalBudget += p.totalBudget;
    totalCollected += p.collectedAmount;
  });

  const activeProjectsElem = document.getElementById('kpi-projects-active');
  if (activeProjectsElem) activeProjectsElem.textContent = `${totalProjects} Dự Án`;

  const navProjectsCount = document.getElementById('nav-projects-count');
  if (navProjectsCount) navProjectsCount.textContent = totalProjects;

  const totalWorkersElem = document.getElementById('kpi-workers-total');
  if (totalWorkersElem) totalWorkersElem.textContent = `${totalWorkers} Nhân sự`;

  const totalCollectedElem = document.getElementById('kpi-collected-total');
  if (totalCollectedElem) {
    const tỷ = (totalCollected / 1000000000).toFixed(1);
    totalCollectedElem.textContent = `${tỷ} Tỷ VNĐ`;
  }
}

// Render danh sách dự án ở Tab Tổng Quan
function renderOverviewProjects() {
  const container = document.getElementById('overview-projects-list');
  if (!container) return;

  container.innerHTML = '';
  Object.values(state.projects).forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-compact-card';
    card.onclick = () => selectAndFocusProject(p.id);

    const tỷBudget = (p.totalBudget / 1000000000).toFixed(2);

    card.innerHTML = `
      <div class="project-card-top">
        <div>
          <div class="project-card-name">${p.name}</div>
          <div class="project-card-loc">CĐT: ${p.client.split(' ')[0]} • Giá trị: ${tỷBudget} Tỷ</div>
        </div>
        <span class="status-pill status-info">${p.progress}%</span>
      </div>
      <div>
        <div style="font-size:0.75rem; color:var(--text-muted);">Giai đoạn: <strong>${p.stage}</strong></div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width: ${p.progress}%;"></div>
        </div>
      </div>
      <div class="project-card-metric">
        <span>${p.siteEngineer} (${p.workersToday} thợ)</span>
        <span style="color:var(--success); font-weight:600;">${p.statusText}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Bảng Dự án & Hồ sơ (Tab 2)
function renderProjectsTable() {
  const tbody = document.getElementById('projects-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  Object.values(state.projects).forEach(p => {
    const tr = document.createElement('tr');
    const percent = Math.round((p.collectedAmount / p.totalBudget) * 100);

    tr.innerHTML = `
      <td><strong>${p.name}</strong></td>
      <td>${p.client}</td>
      <td>${p.address}</td>
      <td style="font-weight:700; color:var(--primary);">${p.totalBudget.toLocaleString('vi-VN')} đ</td>
      <td style="color:var(--success); font-weight:700;">${p.collectedAmount.toLocaleString('vi-VN')} đ (${percent}%)</td>
      <td>
        <a href="javascript:void(0)" onclick="openDrawingPreview('Hồ sơ & Bản vẽ ${p.name}')" style="color:var(--primary); text-decoration:none; font-weight:600; display:inline-flex; align-items:center; gap:0.3rem;">
          <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          ${p.docsCount} Bản vẽ CAD/PDF & HĐ
        </a>
      </td>
      <td>${p.siteEngineer}</td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="selectAndFocusProject('${p.id}')">Xem Dự Toán</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Cập nhật thông tin dự án hiện tại lên giao diện
function renderActiveProject() {
  const p = state.projects[state.activeProject];
  if (!p) return;

  const estTitle = document.getElementById('estimate-project-title');
  if (estTitle) estTitle.textContent = p.name;

  const mProj = document.getElementById('m-current-project-name');
  if (mProj) mProj.textContent = p.name;

  const reqProj = document.getElementById('req-mat-project');
  if (reqProj) reqProj.value = p.name;
}

// Render Bảng Dự toán & Báo giá (BOQ)
function renderBOQTable() {
  const p = state.projects[state.activeProject];
  const tbody = document.getElementById('boq-table-body');
  if (!tbody || !p) return;

  tbody.innerHTML = '';
  let totalAll = 0;

  p.boq.forEach(item => {
    totalAll += item.total;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight:600; color:var(--text-muted);">${item.stt}</td>
      <td style="font-weight:600;">${item.name}</td>
      <td><span class="status-pill status-gray">${item.unit}</span></td>
      <td style="font-weight:700;">${item.qty.toLocaleString('vi-VN')}</td>
      <td>${item.matPrice.toLocaleString('vi-VN')} đ</td>
      <td>${item.labPrice.toLocaleString('vi-VN')} đ</td>
      <td style="font-weight:700; color:var(--primary);">${item.total.toLocaleString('vi-VN')} đ</td>
      <td>
        <span class="status-pill ${item.status === 'Hoàn thành' ? 'status-success' : item.status === 'Đang làm' || item.status === 'Chuẩn bị đổ' ? 'status-warning' : 'status-gray'}">
          ${item.status}
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const totalElem = document.getElementById('boq-total-amount');
  if (totalElem) totalElem.textContent = totalAll.toLocaleString('vi-VN') + ' đ';
}

// Render Bảng Dòng Tiền & Thu Nợ
function renderCashflowTable() {
  const p = state.projects[state.activeProject];
  const tbody = document.getElementById('cashflow-table-body');
  if (!tbody || !p) return;

  tbody.innerHTML = '';

  p.milestones.forEach(m => {
    const tr = document.createElement('tr');
    let statusBadge = '';
    let actionBtn = '';

    if (m.status === 'paid') {
      statusBadge = '<span class="status-pill status-success">Đã thu đủ</span>';
      actionBtn = '<button class="btn btn-outline btn-sm" onclick="showToast(\'Hóa đơn điện tử đã phát hành thành công!\', \'info\')">Xem phiếu thu</button>';
    } else if (m.status === 'due_soon') {
      statusBadge = '<span class="status-pill status-warning">Đến hạn thu</span>';
      actionBtn = `<button class="btn btn-primary btn-sm" onclick="sendPaymentRequest('${m.name}', '${m.amount.toLocaleString('vi-VN')}')">Gửi đề nghị thu</button>`;
    } else {
      statusBadge = '<span class="status-pill status-gray">Chưa đến mốc</span>';
      actionBtn = '<span style="color:var(--text-muted); font-size:0.75rem;">Theo tiến độ</span>';
    }

    tr.innerHTML = `
      <td style="font-weight:700;">${m.name}</td>
      <td>${p.name}</td>
      <td style="font-weight:700; color:var(--primary);">${m.percent}</td>
      <td style="font-weight:800; font-size:0.9rem;">${m.amount.toLocaleString('vi-VN')} đ</td>
      <td style="font-size:0.78rem; color:var(--text-muted);">${m.trigger}</td>
      <td style="font-family:var(--font-mono); font-size:0.78rem;">${m.deadline}</td>
      <td>${statusBadge}</td>
      <td>${actionBtn}</td>
    `;
    tbody.appendChild(tr);
  });
}

function sendPaymentRequest(milestoneName, amountStr) {
  showToast(`Đã gửi đề nghị thanh toán ${milestoneName} (${amountStr} đ) kèm biên bản nghiệm thu cho Chủ Đầu Tư!`, 'success');
}

// Render Danh Sách Phiếu Vật Tư
function renderMaterialTable() {
  const tbody = document.getElementById('materials-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  const pendingCount = state.materialPOs.filter(po => po.status === 'pending').length;
  
  const badgePO = document.getElementById('badge-pending-po');
  if (badgePO) badgePO.textContent = `${pendingCount} Phiếu chờ`;
  
  const cardBadge = document.getElementById('po-count-badge');
  if (cardBadge) cardBadge.textContent = `${pendingCount} Phiếu Chờ Duyệt`;

  state.materialPOs.forEach(po => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-family:var(--font-mono); font-weight:700; color:var(--primary);">${po.id}</td>
      <td style="font-weight:600;">${po.project}</td>
      <td>${po.engineer}</td>
      <td style="font-weight:700; color:var(--dark);">${po.item}</td>
      <td style="color:var(--warning); font-weight:600;">${po.time}</td>
      <td style="font-size:0.78rem; color:var(--text-muted);">${po.reason}</td>
      <td>
        <span class="status-pill ${po.status === 'approved' ? 'status-success' : 'status-warning'}">
          ${po.status === 'approved' ? 'Đã duyệt & Đang chở' : 'Chờ phê duyệt'}
        </span>
      </td>
      <td>
        ${po.status === 'pending' ? `
          <button class="btn btn-success btn-sm" onclick="approvePO('${po.id}')">Duyệt Ngay</button>
        ` : `
          <span style="font-size:0.75rem; color:var(--success); font-weight:700;">Đã xuất kho</span>
        `}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function approvePO(poId) {
  const po = state.materialPOs.find(p => p.id === poId);
  if (po) {
    po.status = 'approved';
    renderMaterialTable();
    showToast(`Đã phê duyệt phiếu ${poId} (${po.item})! Đơn vị cung ứng đang vận chuyển ra công trường.`, 'success');
  }
}

// Render Bảng Chấm Công Toàn Hệ Thống
function renderAttendanceTable() {
  const tbody = document.getElementById('attendance-table-body');
  if (!tbody) return;

  const data = [
    { site: 'Biệt thự Yên Bệ (Hoài Đức)', team: 'Tổ Nề - Anh Thắng', lead: 'Nguyễn Văn Thắng', count: 10, time: '06:45', gps: 'Hợp lệ (Cách 12m)', advance: '300.000 đ', status: 'Đang thi công' },
    { site: 'Biệt thự Yên Bệ (Hoài Đức)', team: 'Tổ Sắt - Anh Mạnh', lead: 'Trần Văn Mạnh', count: 5, time: '06:50', gps: 'Hợp lệ (Cách 15m)', advance: '200.000 đ', status: 'Đang thi công' },
    { site: 'Biệt thự Yên Bệ (Hoài Đức)', team: 'Tổ Điện Nước - Anh Hòa', lead: 'Lê Văn Hòa', count: 3, time: '07:05', gps: 'Hợp lệ (Cách 8m)', advance: '0 đ', status: 'Đang thi công' },
    { site: 'KTA Tower Cầu Giấy', team: 'Tổ Ván Khuôn & Giàn Giáo', lead: 'Hoàng Văn Cường', count: 18, time: '06:30', gps: 'Hợp lệ (Cách 5m)', advance: '1.200.000 đ', status: 'Đang đổ sàn T5' },
    { site: 'KTA Tower Cầu Giấy', team: 'Tổ Bê Tông & Cốt Thép', lead: 'Vũ Đức Nam', count: 18, time: '06:35', gps: 'Hợp lệ (Cách 10m)', advance: '800.000 đ', status: 'Đang đổ sàn T5' },
    { site: 'Splendora Nam An Khánh', team: 'Tổ Sơn Bả & Thạch Cao', lead: 'Đặng Tuấn Anh', count: 14, time: '07:00', gps: 'Hợp lệ (Cách 20m)', advance: '500.000 đ', status: 'Hoàn thiện' },
    { site: 'Splendora Nam An Khánh', team: 'Tổ Ốp Lát Granite', lead: 'Phạm Văn Dũng', count: 8, time: '07:15', gps: 'Hợp lệ (Cách 18m)', advance: '400.000 đ', status: 'Ốp cầu thang' },
    { site: 'Suối Hai Ba Vì', team: 'Tổ Đào Móng & Thợ Nề', lead: 'Ngô Văn Tự', count: 18, time: '06:40', gps: 'Hợp lệ (Cách 25m)', advance: '600.000 đ', status: 'Đổ móng' }
  ];

  tbody.innerHTML = '';
  data.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight:600;">${item.site}</td>
      <td style="font-weight:700; color:var(--primary);">${item.team}</td>
      <td>${item.lead}</td>
      <td style="font-weight:700; text-align:center;">${item.count} Nhân sự</td>
      <td style="font-family:var(--font-mono); font-size:0.75rem;">${item.time}</td>
      <td><span class="status-pill status-success">${item.gps}</span></td>
      <td style="color:var(--warning); font-weight:600;">${item.advance}</td>
      <td><span class="status-pill status-info">${item.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Live Feed trên Văn Phòng
function renderDesktopLiveFeed() {
  const deskFeed = document.getElementById('desktop-live-feed');
  if (!deskFeed) return;

  deskFeed.innerHTML = `
    <div class="feed-row">
      <div class="feed-meta">17:45</div>
      <div class="feed-content">
        <div><strong>KS. Nguyễn Văn Hùng</strong> • Biệt thự Yên Bệ (Hoài Đức)</div>
        <div style="margin-top:2px;">Hoàn thành đan sắt dầm sàn L2, xe bồn bê tông Sông Đà đã vào vị trí. Nghiệm thu nội bộ đạt chuẩn thiết kế, sẵn sàng đổ bê tông.</div>
      </div>
    </div>
    <div class="feed-row feed-po">
      <div class="feed-meta">16:10</div>
      <div class="feed-content">
        <div><strong>KS. Trần Quốc Đạt</strong> • KTA Tower Cầu Giấy</div>
        <div style="margin-top:2px;">Đã tiếp nhận 12.5 tấn thép D18 Hòa Phát & 350 bao xi măng Vicem. Đã kiểm tra phiếu xuất xưởng và bảo quản tại bãi che phủ.</div>
      </div>
    </div>
    <div class="feed-row feed-alert">
      <div class="feed-meta">14:20</div>
      <div class="feed-content">
        <div><strong>Hệ Thống Dòng Tiền</strong> • Nhắc Hạn Thanh Toán</div>
        <div style="margin-top:2px;">Đợt 3 (Xong sàn T2) công trình Biệt thự Yên Bệ trị giá <strong>970.000.000đ</strong> sẽ tới hạn thu vào ngày 04/10/2026.</div>
      </div>
    </div>
  `;
}

// Render Feed trên Hiện Trường
function renderMobileFeed() {
  const container = document.getElementById('m-log-feed');
  if (!container) return;

  container.innerHTML = '';
  state.fieldLogs.forEach(log => {
    const div = document.createElement('div');
    div.style.padding = '0.5rem';
    div.style.background = '#f8fafc';
    div.style.borderRadius = '4px';
    div.style.border = '1px solid var(--border)';
    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:var(--text-muted);">
        <span>${log.author}</span>
        <span>${log.time}</span>
      </div>
      <div style="font-weight:700; color:var(--dark); margin:2px 0;">${log.title}</div>
      <div style="font-size:0.75rem; color:var(--text-main);">${log.desc}</div>
    `;
    container.appendChild(div);
  });
}

// Điểm danh GPS tại hiện trường
function mobileDoGPSCheckin() {
  showToast('Điểm danh GPS thành công! Tọa độ: 21.0345°N, 105.7120°E (Cổng làng Yên Bệ - Hợp lệ). Đã ghi nhận giờ vào ca!', 'success');
}

// Tăng giảm số thợ
function changeWorkerCount(type, delta) {
  const span = document.getElementById(`count-${type}`);
  if (!span) return;
  let val = parseInt(span.textContent, 10) + delta;
  if (val < 0) val = 0;
  span.textContent = val;

  const t1 = parseInt(document.getElementById('count-the').textContent, 10);
  const t2 = parseInt(document.getElementById('count-sat').textContent, 10);
  const t3 = parseInt(document.getElementById('count-dien').textContent, 10);
  const total = t1 + t2 + t3;

  document.getElementById('m-worker-sum').textContent = `${total} Nhân sự`;
  state.projects.p1.workersToday = total;
  updateDynamicCounters();
}

// Modals
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// Đăng nhật ký
function submitFieldLog() {
  const project = document.getElementById('log-form-project').value;
  const workers = document.getElementById('log-form-workers').value;
  const title = document.getElementById('log-form-title').value.trim() || 'Cập nhật tiến độ thi công dầm sàn T2';
  const desc = document.getElementById('log-form-desc').value.trim() || 'Nghiệm thu khối lượng hoàn thành đạt tiêu chuẩn thiết kế.';

  const newLog = {
    id: `log-${Date.now()}`,
    time: 'Vừa xong',
    project: project,
    author: 'KS. Nguyễn Văn Hùng',
    title: title,
    desc: `${desc} (${workers} nhân công có mặt)`,
    tag: 'Tiến độ'
  };

  state.fieldLogs.unshift(newLog);
  renderMobileFeed();

  // Thêm vào feed văn phòng
  const deskFeed = document.getElementById('desktop-live-feed');
  if (deskFeed) {
    const feedItem = document.createElement('div');
    feedItem.className = 'feed-row';
    feedItem.innerHTML = `
      <div class="feed-meta">Vừa xong</div>
      <div class="feed-content">
        <div><strong>${newLog.author}</strong> • ${newLog.project}</div>
        <div style="margin-top:2px;">${newLog.title}: ${newLog.desc}</div>
      </div>
    `;
    deskFeed.insertBefore(feedItem, deskFeed.firstChild);
  }

  closeModal('modal-add-log');
  showToast('Đã đăng nhật ký thi công! Dữ liệu đã đồng bộ tức thì lên bảng điều hành Ban Giám Đốc.', 'success');
}

// Đề xuất vật tư
function submitMaterialRequest() {
  const project = document.getElementById('req-mat-project').value;
  const name = document.getElementById('req-mat-name').value;
  const qty = document.getElementById('req-mat-qty').value.trim() || '20 Bao';
  const deadline = document.getElementById('req-mat-deadline').value;
  const reason = document.getElementById('req-mat-reason').value.trim() || 'Cấp bổ sung cho hạng mục đang thi công';

  const newPO = {
    id: `PO-${Math.floor(1000 + Math.random() * 9000)}`,
    project: project,
    engineer: 'KS. Nguyễn Văn Hùng',
    item: `${qty} ${name}`,
    time: deadline,
    reason: reason,
    status: 'pending'
  };

  state.materialPOs.unshift(newPO);
  renderMaterialTable();

  closeModal('modal-add-material-req');
  showToast(`Đã gửi phiếu yêu cầu ${newPO.item} tới Ban Quản Trị!`, 'success');
}

// Xem bản vẽ
function openDrawingPreview(title) {
  document.getElementById('modal-drawing-title').textContent = title;
  openModal('modal-drawing');
}

function simulateSelectPhoto() {
  document.getElementById('photo-upload-status').innerHTML = 'Đã đính kèm 01 ảnh chụp hiện trường (Định vị GPS Hoài Đức)';
  showToast('Đã chụp ảnh hiện trường và gắn định vị GPS!', 'info');
}

// Toast
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-msg ${type === 'warning' ? 'toast-warn' : type === 'info' ? 'toast-info' : ''}`;
  
  const iconSvg = type === 'warning'
    ? '<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
    : type === 'info'
    ? '<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    : '<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.2s';
    setTimeout(() => toast.remove(), 200);
  }, 3500);
}
