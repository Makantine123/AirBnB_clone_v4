$(function() {
	var  checkedAmenities = {};

	$('input[type="checkbox"]').change(function() {
		var amenityId = $(this).data('id');
		var amenityName = $(this).data('name');

		if ($(this).is(':checked')) {
			checkedAmenities[amenityId] = amenityName;
		} else {
			delete checkedAmenities[amenityId];
		}
		var amenitiesList = Object.values(checkedAmenities).join(', ');
		$('#amenities').text(amenitiesList);
	});
});
